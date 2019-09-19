import {Task} from './task';
import {Sprint} from './sprint';

export interface UserStory {
  tasks: Task[];
  jiraId: number;
  title: string;
  description: string;
  estimate: number;
  remainingTime: number;
  parentId: number;
  userStoryId: number;
}
