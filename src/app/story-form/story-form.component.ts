import { Component, OnInit } from '@angular/core';
import { StoryService } from '../services/story.service';

@Component({
  selector: 'app-story-form',
  templateUrl: './story-form.component.html',
  styleUrls: ['./story-form.component.css'],
  providers: [StoryService]
})

export class StoryFormComponent {
  content = '';
  constructor(private storyService: StoryService) { }
  addStory() {
    this.storyService.addStory(this.content);
    this.content = '';
  }
}
