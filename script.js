// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "study",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": -275,
          "top": -12,
          "angle": 0,
          "width": 555.8,
          "height": 389.62,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "Greetings,\n\nWe are a group of 2nd Year Computer Science students and \nwe are conducting an experiment on student's perceptions \ntowards the quality of online learning.\n\nPlease follow the instruction throughout the experiment and \nanswer the questions as honest as possible.\n\nPlease refrain from referring to any resources while answering \nthe question.\n\nYour response will be strictly kept private and confidential. \nWe will not ask for your private information.\n",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "20",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "left"
        },
        {
          "type": "i-text",
          "left": -139,
          "top": 200,
          "angle": 0,
          "width": 256.82,
          "height": 22.6,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "#12864e",
          "text": "Press on any key to continue",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "20",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "keypress": "continue"
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Introduction"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": -275,
          "top": -25,
          "angle": 0,
          "width": 577.22,
          "height": 421.49,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "Part 1:\nYou are required to read the materials provided and \nmemorize, as much as possible, the content of the \nmaterials.\n\nYou will be given exactly sixty (60) seconds to read \nthe first material and thirty (30) seconds to read the \nsecond material. Then, you are required to answer \nthree (3) questions for each material.\n\nThere will be two (2) materials provided.\n\nGood luck!",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "25",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "left"
        },
        {
          "type": "i-text",
          "left": -138,
          "top": 200,
          "angle": 0,
          "width": 256.82,
          "height": 22.6,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "#12864e",
          "text": "Press on any key to continue",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "20",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "keypress": "Continue"
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Part 1 Instruction"
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Complex",
      "content": [
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": -337,
              "top": 50,
              "angle": 0,
              "width": 701.74,
              "height": 350.66,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "The Himalayas is a mountain range in South and East Asia separating the plains \nof the Indian subcontinent from the Tibetan Plateau. The range has many of Earth's \nhighest peaks, including the highest, Mount Everest, at the border between Nepal \nand China. The Himalayas include over fifty mountains exceeding 7,200 m (23,600 ft) \nin elevation, including ten of the fourteen 8,000-metre peaks. By contrast, the highest \npeak outside Asia (Aconcagua, in the Andes) is 6,961 m (22,838 ft) tall. Lifted by the \nsubduction of the Indian tectonic plate under the Eurasian Plate, the Himalayan \nmountain range runs west-northwest to east-southeast in an arc 2,400 km (1,500 mi) \nlong. Its western anchor, Nanga Parbat, lies just south of the northernmost bend of the \nIndus river. Its eastern anchor, Namcha Barwa, is just west of the great bend of the \nYarlung Tsangpo River (upper stream of the Brahmaputra River). The Himalayan \nrange is bordered on the northwest by the Karakoram and the Hindu Kush ranges. \nTo the north, the chain is separated from the Tibetan Plateau by a 50–60 km (31–37 mi) \nwide tectonic valley called the Indus-Tsangpo Suture.Towards the south, the arc of the \nHimalaya is ringed by the very low Indo-Gangetic Plain.",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "18",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "left"
            },
            {
              "type": "i-text",
              "left": 0,
              "top": -225,
              "angle": 0,
              "width": 288.14,
              "height": 36.16,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "Read and Memorize",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "32",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "i-text",
              "left": 0,
              "top": -175,
              "angle": 0,
              "width": 327.96,
              "height": 22.6,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "#FF0000",
              "text": "The text will disappear in 60 seconds",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "20",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Complex Text",
          "timeout": "60000"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": -175,
              "top": -25,
              "angle": 0,
              "width": 339.24,
              "height": 215.15,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "Instruction: \nFrom your keyboard, key in\na to select answer A\nb to select answer B\nc to select answer C\nd to select answer D",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "28",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "left"
            },
            {
              "type": "i-text",
              "left": -50,
              "top": 161,
              "angle": 0,
              "width": 234.57,
              "height": 22.6,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "#12864e",
              "text": "Press any key to continue.",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "20",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "keypress": "continue"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Instruction"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": -289,
              "top": -50,
              "angle": 0,
              "width": 608.52,
              "height": 215.15,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "Q1: Which one is the Himalayas eastern anchor?\n\n       A. Tibetan Plateau \n       B. Namcha Barwa \n       C. Nanga Parbat \n       D. Yarlung Tsangpo River",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "28",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "left"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "keypress(a)": "A",
            "keypress(b)": "B",
            "keypress(c)": "C",
            "keypress(d)": "D"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Complex Text Q1"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": -325,
              "top": 0,
              "angle": 0,
              "width": 678.63,
              "height": 288.56,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "Q2: The Himalayas is a mountain range in _________ \nseparating the plains of the Indian subcontinent \nfrom the Tibetan Plateau.\n\n       A. South and East Asia \n       B. South and West Asia \n       C. North and West Asia \n       D. East and West Asia",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "28",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "left"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "keypress(a)": "A",
            "keypress(b)": "B",
            "keypress(c)": "C",
            "keypress(d)": "D"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Complex Text Q2"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": -290,
              "top": 13,
              "angle": 0,
              "width": 599.24,
              "height": 361.96,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "Q3: The Himalayan range is bordered on the \nnorthwest by the Karakoram and the Hindu \nKush ranges. The tectonic valley that separated \nthe chain from the Tibetan Plateau by 50-60km \nis called______.\n\n       A. Indo-Gangetic Plain \n       B. Indus-Tsangpo Suture \n       C. Eurasian Plate \n       D. North Indian Plain",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "28",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "left"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "keypress(a)": "A",
            "keypress(b)": "B",
            "keypress(c)": "C",
            "keypress(d)": "D"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Complex Text Q3"
        }
      ]
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Simple",
      "content": [
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "image",
              "left": -11,
              "top": 50,
              "angle": 0,
              "width": 639.45,
              "height": 295.47,
              "stroke": null,
              "strokeWidth": 0,
              "fill": "black",
              "src": "${ this.files[\"Blank diagram.png\"] }",
              "autoScale": undefined
            },
            {
              "type": "i-text",
              "left": 25,
              "top": -175,
              "angle": 0,
              "width": 288.14,
              "height": 36.16,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "Read and Memorize",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "i-text",
              "left": 25,
              "top": -135.96,
              "angle": 0,
              "width": 409.95,
              "height": 28.25,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "\t#FF0000",
              "text": "The text will disappear in 30 seconds",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "25",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {
            "Blank diagram.png": "embedded\u002Ff7b04e937833fe57a830610497ede95734498709bb1d5a992a4856359495b1c5.png"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Simple Text",
          "timeout": "30000"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": -175,
              "top": -35,
              "angle": 0,
              "width": 302.89,
              "height": 192.1,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "Instruction: \nFrom your keyboard, key in\na to select answer A\nb to select answer B\nc to select answer C\nd to select answer D",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "25",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "left"
            },
            {
              "type": "i-text",
              "left": -50,
              "top": 150,
              "angle": 0,
              "width": 234.57,
              "height": 22.6,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "#12864e",
              "text": "Press any key to continue.",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "20",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "keypress": "continue"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Instruction"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": -315,
              "top": 0,
              "angle": 0,
              "width": 658.29,
              "height": 325.26,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "Q1: The two routes to approach the summit are from \n________ and ________.\n\ni. Southeast Nepal \nii. Northeast Nepal \niii. South in Tibet\niv. North in Tibet\n\nA. i, iii            B. ii, iii          C. i, iv          D. ii, iv",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "28",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "left"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "keypress(a)": "A",
            "keypress(b)": "B",
            "keypress(c)": "C",
            "keypress(d)": "D"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Simple Text Q1"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": -300,
              "top": 0,
              "angle": 0,
              "width": 636.58,
              "height": 215.15,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "Q2: Which one is not the danger of Mount Everest?\n\n       A. Hazard from icefall \n       B. Wind \n       C. Substantial technical climbing challenges \n       D. Altitude Sickness",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "28",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "left"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "keypress(a)": "A",
            "keypress(b)": "B",
            "keypress(c)": "C",
            "keypress(d)": "D"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Simple Text Q2"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": -325,
              "top": 12,
              "angle": 0,
              "width": 662.81,
              "height": 472.07,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "Q3: Which of the following are true?\n\n  I. Mount Everest is the highest mountain above \n     sea level.\n II. Mount Everest is located in the sub range of \n     the Himalayas.\nIII. The China-India border runs across the summit \n     point of Mount Everest.\nIV. The Khumbu Icefall will affect the Mount Everest \n     climbers\n\nA. I, II, III, IV       B. I, II, III       C. I, II, IV      D.II, III, IV\n",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "28",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "left"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "keypress(a)": "A",
            "keypress(b)": "B",
            "keypress(c)": "C",
            "keypress(d)": "D"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Simple Text Q3"
        }
      ]
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": -285,
          "top": -25,
          "angle": 0,
          "width": 616.15,
          "height": 355.95,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "Part 2:\nYou are now required to watch the videos provided and \nmemorize, as much as possible, the content of the \nvideos.\n\nThen, you are required to answer three (3) questions \nfor each material.\n\nThere will be two (2) videos provided.\n\nGood luck!",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "25",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "left"
        },
        {
          "type": "i-text",
          "left": -150,
          "top": 200,
          "angle": 0,
          "width": 256.82,
          "height": 22.6,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "#12864e",
          "text": "Press on any key to continue",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "20",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "keypress": "continue"
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Part 2 Instruction"
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Boring",
      "content": [
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "content": "Copy and paste the link to your browser:   \nshorturl.at\u002FderEW",
              "title": "Please watch the video below to answer the question. (Press \"Continue\" after you watch the video)"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continue →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Boring Video"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": -200,
              "top": -12,
              "angle": 0,
              "width": 407.2,
              "height": 290.41,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "Instruction: \nFrom your keyboard, key in\na to select answer A\nb to select answer B\nc to select answer C\nd to select answer D\n\nPlease do not refer back to the video\nwhile answering the questions.",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "25",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "left"
            },
            {
              "type": "i-text",
              "left": -75,
              "top": 175,
              "angle": 0,
              "width": 234.57,
              "height": 22.6,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "#12864e",
              "text": "Press any key to continue.",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "20",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "keypress": "continue"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Instruction"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": -262,
              "top": 25,
              "angle": 0,
              "width": 556.66,
              "height": 251.85,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "Q1: What is the video about?\n\nA. The basic of Microsoft Word \nB. Word Processing and Desktop Publishing \nC. How to use Microsoft Word\nD. The advantages of Word Processing\n",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "28",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "left"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "keypress(a)": "A",
            "keypress(b)": "B",
            "keypress(c)": "C",
            "keypress(d)": "D"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Boring Video Question 1"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": -338,
              "top": 37,
              "angle": 0,
              "width": 691.04,
              "height": 361.96,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "Q2: Randall Smith had recommended to those who are \nprofessional in the business in doing reports and \ndocuments to use …?\n\n       A. Word Processing\n       B. Desktop Publishing\n       C. Word Processing and Desktop Publishing\n       D. None of the above\n\n",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "28",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "left"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "keypress(a)": "A",
            "keypress(b)": "B",
            "keypress(c)": "C",
            "keypress(d)": "D"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Boring Video Question 2"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": -300,
              "top": 11,
              "angle": 0,
              "width": 646,
              "height": 435.37,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "Q3: Which of the following is not done by the \nproduction department when Randy passed \nthe hard copy to them?\n\nA. They provided additional suggestions for \n     Randall to improve his ideas on the hard copy.\nB. They took graphics or photos with subheads \n     or side bars.\nC. They took the documents and set out columns, \n     and put lines between the columns and headline.\nD. They made the article look the way that Randy \n     wanted it to look. ",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "28",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "left"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "keypress(a)": "A",
            "keypress(b)": "B",
            "keypress(c)": "C",
            "keypress(d)": "D"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Boring Video Question 3"
        }
      ]
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Interesting",
      "content": [
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "content": "Copy and paste the link to your browser:   \nshorturl.at\u002FszGJ7",
              "title": "Please watch the video below to answer the question. (Press \"Continue\" after you watch the video)"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continue →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Interesting Video"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": -188,
              "top": -25,
              "angle": 0,
              "width": 407.2,
              "height": 290.41,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "Instruction: \nFrom your keyboard, key in\na to select answer A\nb to select answer B\nc to select answer C\nd to select answer D\n\nPlease do not refer back to the video\nwhile answering the questions.",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "25",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "left"
            },
            {
              "type": "i-text",
              "left": -75,
              "top": 150,
              "angle": 0,
              "width": 234.57,
              "height": 22.6,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "#12864e",
              "text": "Press any key to continue.",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "20",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "keypress": "continue"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Instruction"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": -314,
              "top": 50,
              "angle": 0,
              "width": 638.08,
              "height": 251.85,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "Q1: Which of the following is not a word processor?\n       A. Microsoft Word\n       B. Google Docs\n       C. Microsoft Powerpoint\n       D. OpenOffice\n\n",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "28",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "left"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "keypress(a)": "A",
            "keypress(b)": "B",
            "keypress(c)": "C",
            "keypress(d)": "D"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Interesting Video Question 1"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": -250,
              "top": 0,
              "angle": 0,
              "width": 546.27,
              "height": 178.45,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "Q2: What is the usage of a word processor?\n       A. Create a document\n       B. Print documents\n       C. Store documents electronically\n       D. All of the above",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "28",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "left"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "keypress(a)": "A",
            "keypress(b)": "B",
            "keypress(c)": "C",
            "keypress(d)": "D"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Interesting Video Question 2"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": -314,
              "top": 50,
              "angle": 0,
              "width": 638.15,
              "height": 251.85,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "Q3: Which of the following is not the advantages of \nword processors?\n\n       A. Easy to insert picture\n       B. Easy to print documents\n       C. Improved appearance of documents\n       D. Provides automatic spell check",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "28",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "left"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "keypress(a)": "A",
            "keypress(b)": "B",
            "keypress(c)": "C",
            "keypress(d)": "D"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Interesting Video Question 3"
        }
      ]
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 15,
          "top": 0,
          "angle": 0,
          "width": 457.13,
          "height": 245.89,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "Thank you for your participation!\n\nPlease download your result \nand send it back to us.\n\n Press any key to download.",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 32,
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "keypress": "Download"
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Thank You"
    }
  ]
})

// Let's go!
study.run()