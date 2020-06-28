(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{271:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return c}));var n=a(2),r=a(6),i=(a(0),a(354)),l={id:"edit_the_player_profile",title:"Editing differents things in my player profile",sidebar_label:"Tutorial - Editing differents things in my player profile"},o={id:"tutorials/edit_the_player_profile",title:"Editing differents things in my player profile",description:"!",source:"@site/docs\\tutorials\\edit_the_player_profile.md",permalink:"/docs/tutorials/edit_the_player_profile",editUrl:"https://github.com/Sorata-senpai/sorata-senpai.github.io/tree/developpement/emutarkovwiki/docs/tutorials/edit_the_player_profile.md",sidebar_label:"Tutorial - Editing differents things in my player profile",sidebar:"docs",previous:{title:"Edit weapons textures with photoshop",permalink:"/docs/tutorials/photoshop_texture_editing"},next:{title:"Change global values of the server",permalink:"/docs/tutorials/edit_globals_values"}},s=[{value:"Requirements",id:"requirements",children:[]},{value:"Table :",id:"table-",children:[]},{value:"Editing my character level",id:"editing-my-character-level",children:[]},{value:"Changing my skills level",id:"changing-my-skills-level",children:[]},{value:"Change quest status",id:"change-quest-status",children:[]},{value:"Changing hideout areas status",id:"changing-hideout-areas-status",children:[]},{value:"Editing traders",id:"editing-traders",children:[]},{value:"Adding money to your character",id:"adding-money-to-your-character",children:[]},{value:"Thanks",id:"thanks",children:[]},{value:"Official links",id:"official-links",children:[]}],b={rightToc:s};function c(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/tutorials_profiles.png",alt:null}))),Object(i.b)("h2",{id:"requirements"},"Requirements"),Object(i.b)("p",null,"For doing ",Object(i.b)("strong",{parentName:"p"},"any")," edits in EmuTarkov i higly recommend you to use this software :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/VSCodium/vscodium/releases"}),"VSCodium"))),Object(i.b)("p",null,"This software is free and alot more helpfull for alot of things, like missing coma and everything about the syntax."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Make a backup of the profile you're using.")),Object(i.b)("p",null,"For this, heads to ",Object(i.b)("inlineCode",{parentName:"p"},"ServerFolder/user/profiles")," and create a copy of the profile you're using (you should have only one if you don't know what you're doing, and need this tutorial)."),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If you want to make any changes, close both the game and the server, none of these should run."))),Object(i.b)("h2",{id:"table-"},"Table :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/tutorials/edit_the_player_profile#editing-my-character-level"}),"Change your character level")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/tutorials/edit_the_player_profile#changing-my-skills-level"}),"Change your skills level")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/tutorials/edit_the_player_profile#change-quest-status"}),"Change your quests status")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/tutorials/edit_the_player_profile#changing-hideout-areas-status"}),"Change your hideouts areas status")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/tutorials/edit_the_player_profile#editing-traders"}),"Change your traders loyalty level")," "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/tutorials/edit_the_player_profile#adding-money-to-your-character"}),"Add money in your stash"))),Object(i.b)("h2",{id:"editing-my-character-level"},"Editing my character level"),Object(i.b)("p",null,"In this part, we are going to change your character level in EmuTarkov. For doing this we are going to make edits in the following file : ",Object(i.b)("inlineCode",{parentName:"p"},"ServerFolder/user/profiles/accountID/character.json"),"."),Object(i.b)("p",null,"Open the file with VSCodium or Notepad++ and find the following line : ",Object(i.b)("strong",{parentName:"p"},'"Experience": 0,'),"."),Object(i.b)("p",null,"This line is defining how much experience your character have, and will define wich level he have, we wont change the line ",Object(i.b)("strong",{parentName:"p"},'"Level": 1,')," because it's not needed, and not read by the server."),Object(i.b)("p",null,"The only thing we will have to do is change this number, by one of the selected level you want. You can know wich experience you need for each level there : ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://escapefromtarkov.gamepedia.com/Character_skills"}),"Escape From Tarkov Wiki")," at the end of the page."),Object(i.b)("p",null,"The column we want to take the number from is : ",Object(i.b)("em",{parentName:"p"},"Cumulative Total"),"."),Object(i.b)("p",null,'Copy this number and replace the number "0" in your profile and remove the extra coma in the number and keep the last one. For being level 30 for exemple, it should be this :\n',Object(i.b)("strong",{parentName:"p"},'"Experience": 781760,'),"."),Object(i.b)("p",null,"Save your changes and start the server, you now have the desired level !"),Object(i.b)("h2",{id:"changing-my-skills-level"},"Changing my skills level"),Object(i.b)("p",null,"In this part, we are going to change our skills level, for having the master level of each skill. For this, heads to ",Object(i.b)("inlineCode",{parentName:"p"},"ServerFolder/user/profiles/accountID/character.json")," and search for this in the file : ",Object(i.b)("strong",{parentName:"p"},'"Skills":'),"."),Object(i.b)("p",null,"When you will be at this point, you will face this :"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'"Common": [\n            {\n                "Id": "BotReload",\n                "Progress": 0,\n                "PointsEarnedDuringSession": 0,\n                "LastAccess": -2147483648\n            },\n            {\n                "Id": "Endurance",\n                "Progress": 0,\n                "PointsEarnedDuringSession": 0,\n                "LastAccess": 0\n            },\n            {\n                "Id": "Strength",\n                "Progress": 0,\n                "PointsEarnedDuringSession": 0,\n                "LastAccess": 0\n      },\n      [...]\n')),Object(i.b)("p",null,"Some explanations :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},'"Id":'),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Determine the name of the skill."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},'"Progress":'),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Determine the number of points you learned for this skill."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},'"PointsEarnedDuringSession":'),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Determine how much points you got from the last session."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},'"LastAccess":'),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Determine the last time you earned a point in this skill (it's a timestamp).")))),Object(i.b)("p",null,"So you gessed right ",Object(i.b)("del",{parentName:"p"},"or not")," that we will have to change the ",Object(i.b)("strong",{parentName:"p"},'"Progress":')," part of each skill ",Object(i.b)("strong",{parentName:"p"},"EXCEPT")," the skill ",Object(i.b)("strong",{parentName:"p"},"BotReload"),"."),Object(i.b)("p",null,"How to know wich level is your skill, here is some easy math :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"1 Level = 100 points"),Object(i.b)("li",{parentName:"ul"},"10 Levels = 1000 points"),Object(i.b)("li",{parentName:"ul"},"15 Levels = 1500 points")),Object(i.b)("p",null,"According that the master level of the skill is ",Object(i.b)("strong",{parentName:"p"},"51")," we will need to have ",Object(i.b)("strong",{parentName:"p"},"5100")," points in ",Object(i.b)("strong",{parentName:"p"},'"Progress":'),"."),Object(i.b)("p",null,"At the end, the line for each skill you want to max out looks like this : ",Object(i.b)("strong",{parentName:"p"},'"Progress": 5100,'),"."),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/tutorials/edit_the_player_profile#editing-differents-things-in-my-player-profile"}),"Back at the top")),Object(i.b)("h2",{id:"change-quest-status"},"Change quest status"),Object(i.b)("p",null,"Well, in this part you will learn how to change your quest status, that means, make it finished without having done the requirements for it (you mainly need to do this when a specific quest is bugged)."),Object(i.b)("p",null,"For doing this heads to ",Object(i.b)("inlineCode",{parentName:"p"},"ServerFolder/user/profiles/accountID/character.json")," and search for this in the file : ",Object(i.b)("strong",{parentName:"p"},'"Quests":'),"."),Object(i.b)("p",null,"You're going to face something like this when found : "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'"Quests": [\n        {\n            "qid": "5936d90786f7742b1420ba5b",\n            "startTime": 0,\n            "completedConditions": [],\n            "statusTimers": {\n                "1": 1585993679.6069999\n            },\n            "status": "AvailableForStart"\n        },\n        {\n            "qid": "5936da9e86f7742d65037edf",\n            "startTime": 0,\n            "completedConditions": [\n                "59a9269486f7747aab09a77c"\n            ],\n            "statusTimers": {},\n            "status": "Locked"\n        },\n')),Object(i.b)("p",null,"Let me explain you these :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},'"qid"'),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"This is the quest ID wich will give you the name of the quest."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},'"startTime"'),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"This is the timestamp when you started the quest."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},'"CompletedConditions"'),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"This is where the requirements for completing the quests are stored. These are ID's."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},'"statusTimers"'),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"This is the timestamp since when the quest is available."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},'"status"'),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"This define the status of the quest, decide if it's locked, completed, not started etc.")))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"How do i find the correct quest ID for the quest i look for ?")," You can find all quests ID here : ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/resources/quests_resources"}),"Quest list"),"."),Object(i.b)("p",null,"I think you guessed what we are gonna change ",Object(i.b)("del",{parentName:"p"},"or maybe you didn't")," wich is kinda self explanatory. This is ",Object(i.b)("strong",{parentName:"p"},'"status"')," part."),Object(i.b)("p",null,"Here are all available status for quests :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Locked"),Object(i.b)("li",{parentName:"ul"},"AvailableForStart"),Object(i.b)("li",{parentName:"ul"},"Started"),Object(i.b)("li",{parentName:"ul"},"AvailableForFinish"),Object(i.b)("li",{parentName:"ul"},"Success"),Object(i.b)("li",{parentName:"ul"},"Fail"),Object(i.b)("li",{parentName:"ul"},"FailRestartable"),Object(i.b)("li",{parentName:"ul"},"MarkedAsFailed")),Object(i.b)("p",null,"So, if you want to finish the quest you will need to change the status to : ",Object(i.b)("strong",{parentName:"p"},'"AvailableForFinish"'),", but if you want to re-do a quest you already did, you will need to change the status to : ",Object(i.b)("strong",{parentName:"p"},'"AvailableForStart"'),"."),Object(i.b)("p",null,"Don't forget to save your changes !"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/tutorials/edit_the_player_profile#editing-differents-things-in-my-player-profile"}),"Back at the top")),Object(i.b)("h2",{id:"changing-hideout-areas-status"},"Changing hideout areas status"),Object(i.b)("p",null,"Well, in this part you will learn how to change anything related to the hideout areas, that means, make it max level without having done the requirements for it."),Object(i.b)("p",null,"For doing this heads to ",Object(i.b)("inlineCode",{parentName:"p"},"ServerFolder/user/profiles/accountID/character.json")," and search for this in the file : ",Object(i.b)("strong",{parentName:"p"},'"Hideout":'),"."),Object(i.b)("p",null,"When found, you will see something like this, don't be scared ! :"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'"Production": {},\n        "Areas": [\n            {\n                "type": 3,\n                "level": 4,\n                "active": true,\n                "passiveBonusesEnabled": true,\n                "completeTime": 0,\n                "constructing": false,\n                "slots": []\n            },\n')),Object(i.b)("p",null,"Let's explain what all this mean :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},'"Production":'),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"This is the list of all current productions in your hideout, scav cases, crafting meds etc..."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},'"Areas":'),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"This is the list of all area of the hideout."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},'"type":'),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"This is the area ID for each specific thing in the hideout like ",Object(i.b)("em",{parentName:"li"},"Scav case"),", ",Object(i.b)("em",{parentName:"li"},"Christmas tree"),", ",Object(i.b)("em",{parentName:"li"},"Stash"),", ",Object(i.b)("em",{parentName:"li"},"Workbench")," etc..."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},'"level":'),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"This is the level of the selected area."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},'"active":'),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"It define if the actual area is active or not."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},'"passiveBonusesEnabled":'),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"This define if the bonuses that the area should apply to the player are active or not."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},'"completeTime":'),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The timestamp of when the constructions should be completed."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},'"constructing":'),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Define if the area is actually under construction or not."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},'"slots":'),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"This list all objects stored by the area, mainly used for generators and bitcoin farm.")))),Object(i.b)("p",null,"The two things that are important for us is : ",Object(i.b)("strong",{parentName:"p"},'"type":')," and ",Object(i.b)("strong",{parentName:"p"},'"level":'),". ",Object(i.b)("strong",{parentName:"p"},"Type")," for knowning wich area we are editing and ",Object(i.b)("strong",{parentName:"p"},"Level")," for setting it's level. You can find all area types and their max level here : ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/resources/locations_resources"}),"Hideout Areas list")),Object(i.b)("p",null,"The only thing you will have to do is changing the level to the max level number for selected area type and save your changes ! After that you can start your server and check your hideout !"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/tutorials/edit_the_player_profile#editing-differents-things-in-my-player-profile"}),"Back at the top")),Object(i.b)("h2",{id:"editing-traders"},"Editing traders"),Object(i.b)("p",null,"Well, in this part you will learn how to change your quest status, that means, make it finished without having done the requirements for it (you mainly need to do this when a specific quest is bugged).."),Object(i.b)("p",null,"For doing this heads to ",Object(i.b)("inlineCode",{parentName:"p"},"ServerFolder/user/profiles/accountID/character.json")," and search for this in the file : ",Object(i.b)("strong",{parentName:"p"},'"TraderStandings":'),"."),Object(i.b)("p",null,"You're going to face something like this when found : "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'"54cb50c76803fa8b248b4571": {\n            "currentLevel": 1,\n            "currentSalesSum": 368974,\n            "currentStanding": 0.2,\n            "NextLoyalty": null,\n            "loyaltyLevels": {\n                "0": {\n                    "minLevel": 1,\n                    "minSalesSum": 0,\n                    "minStanding": 0\n                },\n                "1": {\n                    "minLevel": 15,\n                    "minSalesSum": 1000000,\n                    "minStanding": 0.2\n                },\n                "2": {\n                    "minLevel": 22,\n                    "minSalesSum": 1500000,\n                    "minStanding": 0.35\n                },\n                "3": {\n                    "minLevel": 33,\n                    "minSalesSum": 2300000,\n                    "minStanding": 0.5\n                }\n            }\n        },\n')),Object(i.b)("p",null,"Time to explain you everything !"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},'"54cb50c76803fa8b248b4571":'),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"That's the trader ID."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},'"currentLevel":'),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"This is the current the trader is (yes it's kinda self explanatory)."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},'"currentSalesSum":'),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"This is the total money you got for selling and buying to the trader."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},'"currentStanding":'),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"This is the total Standing points you got from quests for the trader."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},'"NextLoyalty":'),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Don't pay attention to this."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},'"loyaltyLevels":'),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"This is all the Loyalty levels for the trader and their requirements.")))),Object(i.b)("p",null,"So, for making all traders at their max loyalty level, we are going to take values from the Loyalty Level list, and take the last number values, and you will replace :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"currentStanding")," value by ",Object(i.b)("strong",{parentName:"li"},"minStanding")," value."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"currentSalesSum")," value by ",Object(i.b)("strong",{parentName:"li"},"minSalesSum")," value."),Object(i.b)("li",{parentName:"ul"},"Set ",Object(i.b)("strong",{parentName:"li"},"currentLevel")," to ",Object(i.b)("strong",{parentName:"li"},"4"),".")),Object(i.b)("p",null,"Only last thing is to save the changes ! And you're done, the trader is LL4 now. You can find the list of all traders ID here : ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/resources/other_resources"}),"Traders ID List"),"."),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/tutorials/edit_the_player_profile#editing-differents-things-in-my-player-profile"}),"Back at the top")),Object(i.b)("h2",{id:"adding-money-to-your-character"},"Adding money to your character"),Object(i.b)("p",null,"In this part, we are going to add some cash in your inventory. For doing this we are going to make edits in the following file : ",Object(i.b)("inlineCode",{parentName:"p"},"ServerFolder/user/profiles/accountID/character.json"),"."),Object(i.b)("p",null,"First of all, make a stack of rouble, with a defined number, for an easier way, put it at ",Object(i.b)("strong",{parentName:"p"},"25666"),", you now have a 25.666 stack of any money you choosed (can be lower number too, just make it a obvious number like 666 or 222 etc...). Now close the game ",Object(i.b)("strong",{parentName:"p"},"and")," the server."),Object(i.b)("p",null,"Open the file with VSCodium or Notepad++ and find the following line : ",Object(i.b)("strong",{parentName:"p"},'"StackObjectsCount": 25666')," (for our exemple, but change the number with the stack you made)."),Object(i.b)("p",null,"This line is defining how much money the stack contain, and this is this line we are going to change. Now change the number ",Object(i.b)("strong",{parentName:"p"},"25666* by any number, like "),"99999999**. This will give you 99.999.999 $/\u20ac/Roubles"),Object(i.b)("p",null,"Save your changes and start the server, you now have a stack of 99.999.999 money !"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/tutorials/edit_the_player_profile#editing-differents-things-in-my-player-profile"}),"Back at the top")),Object(i.b)("h2",{id:"thanks"},"Thanks"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Tutorials made by : Sorata-Senpai")),Object(i.b)("h2",{id:"official-links"},"Official links"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Discord link"),": ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://discord.gg/3sR4KKS"}),"https://discord.gg/3sR4KKS")))}c.isMDXComponent=!0},354:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),c=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),u=c(a),h=n,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||i;return a?r.a.createElement(m,o(o({ref:t},b),{},{components:a})):r.a.createElement(m,o({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var b=2;b<i;b++)l[b]=a[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);