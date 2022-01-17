const { assert } = require("chai")

const TodoList = artifacts.require('./TodoList.sol')


contract('TodoList', (accounts) => {
    before(async () => {
        this.todoList = await TodoList.deployed()
    })

    it('deploys successfully', async () => {
        const address = await this.todoList.address

        assert.notEqual(address, 0x0)
        assert.notEqual(address, '')
        assert.notEqual(address, null)
        assert.notEqual(address, undefined)
    })

    it('lists tasks', async() => {
        const taskCount = await this.todoList.taskCount()
        const task = await this.todoList.tasks(taskCount)
        assert.equal(task.id.toNumber(), taskCount.toNumber())
        assert.equal(taskCount.toNumber(), 1)
        assert.equal(task.content, 'This task is created by default')
        assert.equal(task.completed, false)
    })

    it('create tasks', async () => {
        const result = await this.todoList.createTask('A new task')
        const taskCount = await this.todoList.taskCount()
        const event = result.logs[0].args

        assert.equal(taskCount, 2)
        assert.equal(event.id.toNumber(), 2)
        assert.equal(event.content, 'A new task')
        assert.equal(event.completed, false)
    })

    it('toggles tasks completion', async () => {
        const task = await this.todoList.tasks(1)
        const result = await this.todoList.toggleCompleted(1)
        
        const event = result.logs[0].args

        assert.equal(event.id.toNumber(), 1)
        assert.notEqual(event.completed, task.completed)
    })
})