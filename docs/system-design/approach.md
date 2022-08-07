# Approach to System Design

## Notes:
1. Requirement gathering:
    - Ask the right kind of questions to gather the information about the system that you are designing because the interviews are open ended and you need to have an end goal in mind
    - For e.g. If you are asked to design Twitter, you can ask questions like:
        1) Does the application need to have a search bar to search tweets?
        2) Should the application allow only text-based tweets or images to be uploaded as well?
        3) Should the application allow users to login? And so on

2. Back of the envelope estimation:
    These questions are related to the kind of scale that you are building your system to cater to. The questions could look like:
    1. How many queries per second do you expect the system to handle (number of live tweets, number of engagements etc)
    2. How much storage requirements should I set aside to handle all the data?
    3. How much network bandwidth should be allocated to the system to handle the various requests?

3. System interface definition:
	Define the APIs for the system as they serve as the contract between the clients using the system and the system designers. Make sure that these APIs are defined as per the requirements
		
4. Define the data model:
   This stage requires you to list the entities that will be a part of your system design. For example, the entities for Twitter like service could be User, Tweet, UserFollow and FavouriteTweets. You can also identify whether you should use a NoSQL database like Cassandra or a MySQL database to model the relationship between entities
		
5. Come up with a high level design:
   Use a block diagram to identify the key components of your system. For example, you could put a load balancer to distribute the requests to different application servers and use a database for storing text-based tweets as well as a distributed file storage for storing non text-based content such as videos and photos
		
   Clients -> Load Balancer -> App Server 1  -->  Database (faster for multiple reads)
           -> App Server 2  -->  Database
           -> App Server 3 --->  Distributed File Storage
           .. And so on
						
6. Dive deeper into specific components:
Based on the interviewer's feedback, you will get hints about the 2 or 3 components that he expects you to dive into deeper. For example, how you are going to split the load between the application servers using a load balancer
		
7. Identify the bottlenecks in your design:
For example, if you have a single point of failure how will you be addressing it? Do you have multiple replicas of data in case the servers crash? In case the services go down, do you have other copies that will run in place of those services so that the system is not shutdown? How will you monitor the performance of the services?


## Links:
- [Grokking the System Design Interview](https://www.educative.io/courses/grokking-the-system-design-interview)

