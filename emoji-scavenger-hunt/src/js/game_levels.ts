/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

export interface EmojiItem {
  [index: string]: string;
}

export const EMOJIS_LVL_1: Array<EmojiItem> = [
  {
    'name': 'plug',
    'emoji': '🔌',
    'path': '/img/emojis/game/plug.svg'
  },
  {
    'name': 'soccer ball',
    'emoji': '⚽',
    'path': '/img/emojis/game/soccer ball.svg'
  }
];

export const EMOJIS_LVL_2: Array<EmojiItem> = [
  {
    'name': 'hat',
    'emoji': '🧢',
    'path': '/img/emojis/game/hat.svg'
  },
  {
    'name': 'headphones',
    'emoji': '🎧',
    'path': '/img/emojis/game/headphones.svg'
  }
];

export const EMOJIS_LVL_3: Array<EmojiItem> = [
  {
    'name': 'mouse',
    'emoji': '🖱',
    'path': '/img/emojis/game/mouse.svg'
  }
];

export const EMOJIS_LVL_4: Array<EmojiItem> = [
  {
    'name': 'truck',
    'emoji': '🚚',
    'path': '/img/emojis/game/truck.svg'
  }
];

export const EMOJIS_LVL_5: Array<EmojiItem> = [
  {
    'name': 'banana',
    'emoji': '🍌',
    'path': '/img/emojis/game/banana.svg'
  }
];

// Items for the demo are always selected in the same order as they are defined
// here.
export const EMOJIS_LVL_DEMO: Array<EmojiItem> = [
  {
    'name': 'soccer ball',
    'emoji': '⚽',
    'path': '/img/emojis/game/soccer ball.svg'
  },
  {
    'name': 'hat',
    'emoji': '🧢',
    'path': '/img/emojis/game/hat.svg'
  }
];
