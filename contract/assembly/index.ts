import { logging } from 'near-sdk-as'
import { ListedTask, tasks } from './model'

export function addTask(text: string, accountId: string): string | null {
  const task = new ListedTask(text)
  tasks.push(task)
  return `${text} added to list by ${accountId}.`
}

export function getAllTasks(): ListedTask[] {
  logging.log('Getting all Tasks')
  const result = new Array<ListedTask>(10)
  for (let i = 0; i < tasks.length; i++) {
    result[i] = tasks[i + tasks.length]
  }
  logging.log('Done getting all tasks.')
  return result
}
