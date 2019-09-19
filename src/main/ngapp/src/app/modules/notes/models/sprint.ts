import {UserStory} from './userStory';
import {Bug} from './bug';

export interface Sprint {
  sprintId: number;
  sprintDesc: string;
  sprintCapacity: number;
  startDate: Date;
  endDate: Date;
  userStoryId: number;
  stories: UserStory[];
  bugs: Bug[];
}
