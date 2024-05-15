# Creating TypeMaster, An LLM-Powered Chrome Extension

## TypeMaster, our Word-Counting Wizard Mascot

![TypeMaster Mascot](photos/TypeMaster%20Transparent%20Background.png)

## Acknowledgments

First and foremost, I extend my gratitude to Professor Jérémie Lumbroso, whose guidance was instrumental throughout our project for the CIS 3500 Software Design/Engineering class at the University of Pennsylvania. This project was not only an academic endeavor but also a journey into practical application development.

## Introduction

The inception of TypeMaster was driven by a common challenge: the absence of a versatile word counter that could function universally across different platforms—be it drafting homework on Canvas or filling out job application forms. This led our team (James Huang, Tiffany Lian, Sanya Shetty, and Alec Dempsey) to develop TypeMaster, an “anywhere word counter” designed to seamlessly integrate into various text editors and platforms, enhancing productivity and efficiency for users.

## Integrating AI to Enhance Writing

To elevate the functionality of TypeMaster, we incorporated OpenAI’s GPT-3.5 Turbo, enabling the app to not only count words but also provide instant feedback on how to make writing more professional. This feature aims to refine user communications in real-time, ensuring clarity and professionalism.

## Development Journey

### User Stories and Brainstorming

Our development process began with brainstorming sessions where we drafted user stories. Each iteration doubled our partners, enriching the brainstorming sessions and refining our project’s scope to ensure relevance and utility.

### Design and Roadmapping

Following the initial planning phase, we moved to design our interface with Figma, laying out a clear and structured roadmap for our four-week sprint. This roadmap included weekly milestones that guided our development process.


### Weekly Meetings

We sought to document milestones + potential challenges from the beginning. Weekly meetings were held to track our progress against objectives, allowing us to stay aligned and adapt our strategies as needed.

## Learning and Challenges

The project provided us with a profound learning experience in dissecting and understanding codebases, starting with a demo provided by Professor Lumbroso. This early exposure was pivotal, teaching us the intricacies of building tools within a given framework.

### Technical Setbacks

We encountered specific JavaScript issues, such as difficulties with our sidebar not activating due to listener and function setup errors. Additionally, SDK challenges arose when attempting to utilize a deprecated model (Davinci v3), resulting in 404 and 429 errors. These were resolved by switching to the currently supported Turbo-3.5 model and refining our prompt engineering approach.

### AI Support

AI platforms, particularly Claude AI and ChatGPT, played a crucial role in our development process. They were instrumental in navigating complex issues like Chrome’s Content Security Policy (CSP), which complicates API key loading.

## Privacy and Security

A significant challenge was maintaining user privacy while ensuring continuous availability of the OpenAI integration. We adhered to the KISS principle—Keep It Simple, Stupid—storing the API key locally but securely on each user’s device.

## Conclusion

The journey of creating TypeMaster was filled with challenges, learning, and ultimately, the satisfaction of building a tool that addresses a real-world need. Through this project, we not only developed a functional product but also gained invaluable insights into software development, teamwork, and the innovative application of AI.
