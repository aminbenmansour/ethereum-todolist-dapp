pragma solidity ^0.5.0;

contract TodoList {
    /// creation of a state variable
    /// public keywords adds a function to read the state variable 
    uint public taskCount = 0;

    struct Task {
        uint id;
        string content;
        bool completed;
    }

    /// a mapping is key-value DS like hash table
    /// public for adding a free get function
    mapping(uint => Task) public tasks;

    constructor() public {
        createTask("This task is created by default");
    }

    function createTask(string memory _content) public {
        taskCount++;

        tasks[taskCount] = Task(taskCount, _content, false);
    }
}