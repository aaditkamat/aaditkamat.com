# System Design Case Studies
## Notes:

### Case Study 1: Tiny URL

1. Requirements (Functional & Non Functional):
    a. You need to create a short version of the long URL provided with an alias optionally provided -> Functional
    b. The short URL should be able to redirect to the long URL when clicked -> Functional
    c. User should be able to select custom URL for original link -> Functional
    d. There should be high availability of the service otherwise all the redirections would fail -> Non Functional
    e. The clicks on the short URL need to be tracked using analytics to give a better idea about the success rate for the clicks -> Functional (Additional)
    f. URL should expire after a certain period of time, which the user can set -> Functional
    g. The service should be real-time with minimal latency -> Non functional
    h. The generated links should not be guessable -> Non functional
		
2. Off the envelop estimation:
	Assuming 500M URLs created per month, with the read: write ratio being 100:1, that would mean 50 B read queries per month so about 20K queries per second -> traffic estimation
	1 link would generate about 10KB of data so if we are asuming a time horizon of 5 years, we would need to store 500M * 500 Bytes * 60 =   15 TB
	We would need to cache approximately 20% using the 80-20 rule, so the cache memory should be about 20K * 3600 * 24 = 170 GB
	
3. System APIs:
    a. createURL(api_dev_key, original_url, alias=None, user_name=None, expire_data=None) returns shortenedURL
    b. deleteURL(api_dev_key, url_key) -> url_key represents shortened URL and returns "URL deleted successfuly" if deletion is successful
    c. Api_Dev_key ensures that there is no tampering with the data as competitor could just fetch all the stored URLs and put you out of business
		
4. Data model:
    a. User and URL classes
    - User attributes: Created , User ID, Name, Email
    - URL attributes: Hash, Original, User ID, Creation, Expiration
    b. Better to use NoSQL alternatives like Cassandra or Hbase as opposed to SQL because you can scale them better
		
5. High level design:
    a. Use a Key Generation Service (KGS) for generating key that is appended to each URL so that each user generating a short URL for the same original URL will get back a unique one. This gets over the problem of appending a ever increasing sequence to each URL  where the processing of the URLs is slow
    b. Application servers could have cache to store the keys at their own end but this becomes a problem if the server crashes. This would be acceptable since the number of keys stored in the cache is small
    c. Use a Hashing algorithm like SHA256 or MD5 to create a hash for each URL where the problem of unique generation of short URL is solved by KGS and encoding is used once the URL is hashed. Preferred form of encoding is base64 as that covers the 50B queries expected in month with 6 character keys => 64 ^ 6 = 68B+
	
6. Data partitioning:
    a. Range-based: Based on starting character in the key, however this is likely to be unbalanced given that some character would appear more often than others
    b. Hash-based: Randomly split equally into different partitions and would be balanced if consis tent hashing is used

7. Cache:
    a. LRU (Least Recently Used) is a valid policy where the least recently used URL is discarded
    b. Use Linked Hash Map to store URL and Hashes as Key Value Pairs
    c. Off the shelf solution like Memcached to store full URLs with respective hashes

8. Load Balancing:
    a. Introduced between app and cache, app and database  as well as clients and app
    b. First solution is Round Robin where the requests are distributed equally amongst the backend servers. However, this does not account for the server load.
    c. A more intelligent solution is to poll the backend servers about their load and then adjust the routing of traffic accordingly

9. Cleanup:
    a. Instead of purging all the expired links, we can do it lazily whenever the user queries a link that has reached past its expiry date
    b. We can set an expiration time for the link as a maximum value
	
10. Telemetry:
	a. Track the web page accessing the link, country, browser/platform used for accessing

### Case Study 2: Design PasteBin

1. Requirement gathering:
    a. Users should be able to paste only text (Functional)
    b. User should be able to set the expiration time for the pastes (Functional)
    c. User should be able to specify custom alias for the paste (Functional)
    d. Once the user creates a paste, there should be a unique URL to access the paste (Functional)
    e. The system should be highly available so that users can always access their pastes and the data in the pastes is not lost (Non Functional)
    f. Users should be able to access the pastes in real-time with minimal latency (Non Functional)
    g. Paste links should not be guessable (Non Functional)
    h. There should be some analytics to see how many times the paste has been accessed, from which country, browser/platform etc (Extended)
    i. Service should accessible via REST APIs (Extended)
    j. The service should be highly reliable, the pasted data should not be lost (Non Functional)
    
2. Off the envelope estimation:
1 million pastes per day -> 12 pastes/ sec
Read: Write = 5 : 1 -> 60 reads/sec
Memory: 1 million * 10 KB = 10 GB of data per day = 36 TB in 10 years
Cache: 20% of traffic => 5 million * 10 KB * 0.2 = 10GB (80-20 rule)
Network: Write: 120 KB/s  Read: 600 KB/s = 0.6 MB/s

3. API definition:
    a. addPaste(api_dev_key, paste_data, user_name=None, expire_data=None, paste_name=None) -> URL representing paste if success else error
    b. getURL(api_dev_key, paste_key) -> paste_day if paste_key is correct else error
    c. deleteURL(api_dev_key, paste_key) -> 'true' if deletion is successful else 'false'
    
4. Data model:
    a. Considerations:
        i. Large amount of data generated (billions of records)
        ii. Each paste object stored of medium size (few MB)
        iii. Metadata is small (< 1 KB)
        iv. No relationships between data, except between user and paste
    b. Schema:
        i. User: UserID (int), Name (varchar), Email, CreationDate, LastLogin
        ii. Paste: URL Hash (varchar), Content Key (varchar), CreationDate, ExpirationDate, UserID
        
5. High Level Design:
Client talks to the application layer where the application server handles the request. The database layer can consist of two databases: first is a database to store the metadata and second is using a service like Amazon S3 to store the Paste object 

6. Component level Design:
    ○ Need to generate keys in order to ensure unique URLs are generated. You can either keep trying to generate a key that is not already in the key value store or better use a Key Generation Service (KGS) so that you don't have to worry about key collisions
    ○ Object storage use a service like Amazon S3 and MySQL relational database or distributed key value store like Cassandra for Metadata storage
		
7. Rest of the parts are similar to Case Study 1

### Case Study 3: Instagram

1. Requirement gathering:
	- User should be able to follow other users
	- User should be able to create/view/delete their photos and videos
	- The service should be highly available (Non Functional)
	- The service can allow a latency of about 200ms for its news feed feature (Non Functional)
	- The service should be highly reliable so that  user data is not lost (Non Functional)
    - The service can afford to be less consistent in order to be highly available (Non Functional)
	- Users can see top photos of people they follow on their news feeds (Functional)
	- Users can search photos/videos based on titles (Functional)
		
2. Off the envelop estimation:
	- Total: 500 M users, 1 Million daily active users
	- 2M photos uploaded every day => 23 photos/second
	- Average photo size: ~200KB
	- Storage: 400 GB per day, 1460 TB in 10 years
		
3. System Design:
	- Image Storage: Amazon S3, Metadata storage in SQL or NoSQL database
	- Image Hosting System interacts with clients as well as the Image Storage and Metadata Storage services
		
4. Database Schema:
	- User: UserID, CreatedAt, Username, LastLogin, Email
	- Photo: PhotoID,UserID, PhotoLongitude, PhotoLatitude, UserLongitude, UserLatitude, CreatedAt, PhotoPath
	- UserFollow: FollowerID, FolloweeID
	- Better to use SQL database as joins will be required for the ID columns but NoSQL databases are easier to scale
	- Data estimation:
      - Assume 4 bytes for int and date time, 256 bytes for the photo path
	  - With 500 Million users, 500 million * total size
	  - Assume 10 years horizon
	- Reliability:
	  - Losing photos is not an option, so you will need to create backups for the photos
	  - Services also need backup so that there isn't a single point of failure

5. Caching & Load Balancing:
	- Caching can be done using Memcache and should be done intelligently following the 80-20 rule: 20% of the traffic will account for 80% of the interactions so you will need to store at least 20% in the cache
	-  Load Balancing can be done in a round robin fashion (for each request the load balancer sends the request to the servers down a list of servers)
	- LRU (Least Recently Used) a reasonable polciy for caching - evict the memory block that has been used least recently

6. News Feed Creation:
   - Find the top 100 photos for a user with metrics like likeness, number of views etc by fetching the latest photos of a user and passing them through a ranking algorithm
   - The main problem is that we have to fetch data from a lot of tables and then do merge/sort operations. Better to pre generate the User Feed for each user in a table and then fetch it
   - You can follow either the push, pull or the hybrid model for sending data to the users. Push means that you are generating the news feed for the users in advance and sending to them whereas pull means that they are fetching it through pull requests. Hybrid combines both where you send data for users with a few number of followers (because their news feeds won't be a lot) and allow users with a large number of followers to pull data from your server

## Links:
- [Grokking the System Design Interview](https://www.educative.io/courses/grokking-the-system-design-interview)