# Distributed Systems:

## Notes:
- Distributed Systems are those that have components spread out across different networked computers which communicate with each other by passing messages
    -   The machines can be abstracted as nodes connected to a network cloud
    - Hence the two main parts of distributed systems are the nodes connected to the network and the  network that allows the nodes to communicate via messages

- Benefits of Distributed Systems:
    - Scalability:
        - You can either scale the system vertically by adding more resources to each node (for eg. Memory, CPU, Disk) or horizontally by adding more nodes to the network
        - Distributed systems allow you to process more data and perform more computations by distributing the work amongst the nodes
	- Performance:
        - As a single computer's performance is limited due to hardware constraints, you can improve on parameters like latency and throughput by leveraging on multiple computers in the distributed system
	- Availability:
        - Most systems are expected to provide their services at all times 24/7
        -  Services with "five-nine" availability are available 99.9999% of the time - they are allowed a downtime of only 5 minutes per year
        -  A single computer cannot be expected to have such availablity due to the unreliability of a single hardware machine

- Fallacies:
    - Network is reliable
        - While protocols like TCP make it seem like the network will always be able to process requests, this is not always a given
    - Latency is zero
        - Large difference in latency when making remote procedure calls as opposed to making local calls from order of ns to ms. This problem is accentuated when we work with calls in geo distributed data centres.
    - Network is secure
        - The network between two nodes is not under the control of the nodes and hence should be considered as insecure
    - Bandwidth is infinite
        - While bandwidth limits have increased due to better infrastructure, there are still some limitations imposed because we cannot use all of the bandwidth between the data centres
    - Transport cost is zero
        - There will inevitably be some financial costs for sending messages across the network due to the infrastructure that supports the network.
    - Distributed systems operate on a single clock
        - While a single computer operates on its own clock as per which it can set events (events that appear when you view the log), in a distributed system each node operates on the clock that runs at its own rate. It's usually expensive to keep these clocks in sync

- Difficulties:
    - Network asynchrony:
        - Since different computers in the network operate using their own clocks that run at different rates, there are no guarantees around the maximum time taken to deliver a message. Also messages may be delivered out of order or not at all.
	- Concurrency:
		- Unlike in a single computer, where the instructions tend to be executed synchronously line by line, asynchronous execution of programs in a concurrent fashion, where processes interleave their execution, things can get harder to reason about because processes can interfere with each other's functioning such as when two processes write to the same memory area
    - Partial Failure:
        - In a distributed system, some nodes can fail while others don't. If we want to ensure atomicity i.e. each instruction is a single unit that is applied to all the nodes then you have to ensure that none of them is failing, otherwise you don't apply the operation
			
- Measures of Correctness:
	-  Safety: Something that should never happen in a system
    -  Liveness: Something that should happen in a system eventually
	-  Safety > Liveness but there is usually some tension between the two

- Properties of Distributed Systems:
	- There are some properties that systems must satisfy when designing a global model around them. All nodes in the system must satisfy the properties to ensure proper functioning of the distributed systems.
	-  Categories of Distributed Systems:
       - Asynchronous: Nodes have clocks that run at their independent rates so the clocks do not agree on a same time. There is no guarantee (upper bound) on the time taken to send the messages or how much time elapses between consecutive steps on the same node -> This course deals more with asynchronous nodes
	   - Synchronous: Nodes that have clocks that run on the same time and so there is an upper bound on the time taken to send the messages. All the nodes send the messages to each other and the nodes perform computation on the messages they receive in-step (for e.g the second message received is not computed first and sent to the other nodes)

-  Types of failures:
	- Fail-stop: A node fails but the failure is detected by the other nodes when they communicate with it
	- Crash: A node fails silently so the failure is only detected when the other nodes tries to communicate with the failed node
	- Omission: A node fails to respond to all incoming requests
    - Byzantine: A node is unreliable: it responds to the messages sent it to sometimes and does not respond to others. This is usually the case when an external malicious actor has compromised the node and the node does not behave according to the algorithms implemented on it
	- The course assumes that systems operate under the possibilities of crash failures

-  Avoiding duplicate messages:
	- Execution of message sending should occur only once
	- Indempotent operations: 
        - These are operations that have effect when executed only once. E.g. adding a value to a set of values because when you execute it subsequently there is no change to the set since the value has already been added
	- De-duplication approach:
	   - Each message is associated with an identifier so that the recipient can store these identifiers and ensure that the duplicate message sent with the same identifier is dropped without processing
    - You cannot ensure that messages are delivered only once in distributed systems (due to network asynchronicity). However, by using either of the two approaches we can ensure that there are processed only once

- Dealing with failures:
    - Introduce a timeout mechanism
        -  Timeouts are time periods introduced as artificial upper bounds so that we avoid the problem of infinite delays introduced by asynchronous distributed systems.
		    - With a small timeout value, the main problem is that you can get a response from a node later than expected and you declare it as dead whereas it's just slow to respond
			- With a large timeout value, you will solve this problem but you will end up wasting more time waiting for response from the nodes
		- There is usually a tradeoff between completeness and accuracy when it comes to a failure detector. A complete failure detector will able to detect all the nodes that have failed whereas an accurate one is able to detect the node failure at the time it occurs. It is impossible to have a failure detector that is both complete and accurate, but even an imperfect failure detector works well.

-  Stateless vs Stateful:
    - Stateless systems do not maintain any previous state and perform operations purely based on current inputs. Think of them as pure functions abstractly. These are easier to design because we consider the nodes in the network to be similar. E.g. a function that takes maximum of its numeric inputs

	- Stateful systems perform operations based on a combination of the previous state and current inputs. This state is managed and modified by the system. The major problem with designing stateful systems is that each node maintains a different state and these states need to be synchronized. E.g. a system that takes in ages of all the employees and calculates a maximum because the state is represented by the employees

## Links:
- [Distributed Systems](https://www.educative.io/module/lOn30BIA1wV52NDAg/10370001/4527677663084544)
