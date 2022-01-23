import { logging } from 'near-sdk-as'
import { ListedTask, tasks } from './model'

export function addTask(text: string, accountId: string): string | null {
  const task = new ListedTask(text)
  tasks.push(task)
  return `${text} added to list by ${accountId}.`
}

export function markAsDone(text: string, done: boolean): string {



  return `${text} is marked as done.`;
}

export function getAllTasks(): ListedTask[] {
  logging.log('Getting all Tasks')
  const numMessages = min(10, tasks.length);
  const startIndex = tasks.length - numMessages;
  const result = new Array<ListedTask>(numMessages);
  for (let i = 0; i < numMessages; i++) {
    result[i] = tasks[i + startIndex];
  }
  logging.log('Done getting all tasks.')
  return result
}
