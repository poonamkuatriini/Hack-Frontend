import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss']
})
export class ChatBoxComponent {
  userMessage: string = '';
  messages: { sender: string; text: string }[] = [
    { sender: 'bot', text: 'Hi there! How can I help you today?' }
  ];

  sendMessage() {
    if (this.userMessage.trim()) {
      // Add user message
      this.messages.push({ sender: 'user', text: this.userMessage });

      // Simulate bot response
      setTimeout(() => {
        this.messages.push({ sender: 'bot', text: 'Thank you for your message!' });
      }, 1000);

      // Clear input
      this.userMessage = '';
    }
  }
}
