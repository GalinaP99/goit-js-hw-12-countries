import { alert, defaultModules, defaults,  error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';
//import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/Material.css';
import 'material-design-icons/iconfont/material-icons.css';
//import { notice, info, success, error } from '@pnotify/core';
defaultModules.set(PNotifyMobile, {});

// Set default styling.
defaults.styling = 'material';
// This icon setting requires the Material Icons font. (See below.)
defaults.icons = 'material';
/*const myAlert = alert({
  text: "I'm an alert.",
  type: 'info'
});

// Automatically set the type.
const myNotice = notice({
  text: "I'm a notice."
});

const myInfo = info({
  text: "I'm an info message."
});

const mySuccess = success({
  text: "I'm a success message."
});*/
export default {
  myError() {
    error({
      text: "Too many matches found. Please enter a more specific query!"
    })
  }};

/*import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/Material.css';
import 'material-design-icons/iconfont/material-icons.css';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import {
  notice,
  error,
  defaultModules,
  // defaults,
  Stack,
} from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
defaultModules.set(PNotifyMobile, {});
const myStack = new Stack({
  dir1: 'down',
  dir2: 'left',
  firstpos1: 25,
  firstpos2: 30,
  context: document.body,
});
const noticeOptions = {
  title: 'Serching for images',
  text: 'Awaiting while downloading images from server',
  stack: myStack,
  delay: 2000,
};
notice({
      ...noticeOptions,
      title: 'Ops! No more Images',
      text: 'Try to find something else!',
    });*/
