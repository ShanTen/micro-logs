var blogContent =  /*startIndex*/['<div id="1" class="post"><b><u>Test-Post</u></b> Posted on 2024-09-02 00:28<br><h1>Hi this is a test post!</h1>\n<ul>\n<li>bing</li>\n<li>chill</li>\n<li>ING</li>\n</ul></div>', '<div id="2" class="post"><b><u>code_example</u></b> Posted on 2024-09-02 00:28<br><h1>below is a code example</h1>\n<ul>\n<li>x </li>\n<li>y </li>\n<li>z</li>\n</ul>\n<p><code>js\nfunction main(){    \n    var formattedContent = loadContent();\n    var toLoad = document.getElementsByClassName("blogPart")[0]\n    console.log("Hellos");\n    for(x of formattedContent.reverse()){ //reversed so that newest posts pop up first\n        toLoad.innerHTML += `&lt;p class = "Loaded"&gt;${x}&lt;/p&gt;&lt;br&gt;&lt;br&gt;`;\n    }\n}</code></p></div>', '<div id="3" class="post"><b><u>images-work-too</u></b> Posted on 2024-09-02 00:28<br><h2>Sometimes you\'ve got to close a door to open a window</h2>\n<p><img alt="Some Image" src="https://www.rollingstone.com/wp-content/uploads/2019/05/TylerTheCreator_SamRock.jpg?resize=1800,1200&amp;w=1200" /></p></div>', '<div id="4" class="post"><b><u>newMarkdown</u></b> Posted on 2024-09-02 00:28<br><h1>Hello</h1>\n<hr />\n<blockquote>\n<p>This should appear in markdown</p>\n</blockquote>\n<ul>\n<li>1  </li>\n<li>2    </li>\n<li>3  </li>\n</ul>\n<p><del>strike</del></p></div>', '<div id="5" class="post"><b><u>pappa_post</u></b> Posted on 2024-09-02 00:28<br><h2>Fav things</h2>\n<p>this is a list of my favourite things\n+ coffee\n+ walking\n+ swimming\n+ talking to aanchal magu\n    + reading comics\n    + watching series/movies</p>\n<p>$ ax2 + bx +c = 0 $</p>\n<p>Name | Example | which level\n------------|----------|-----\nQuadratic | $ ax^2 + bx +c = 0 $ | class VIII\nSimultaneous | $a_1x+ b_1y= c_1\\ a_2x+ b_2y= c_2$ |  class VI\nTrignometric | $sin^2 \\theta + cos^2\\theta = 1 $ | class X\nDifferentiation| $\\frac {d^2}{dy^2} (x^n) = n(n-1)x^{n-2}$ | class XII \nIntegration | $ \\int x^n = \\frac{x^{n-1}}{n-1} + c $ | class XII</p></div>', '<div id="6" class="post"><b><u>hello is this thing on</u></b> Posted on 2024-09-02 00:41<br><h1>Test</h1>\n<p>Mic Check <strong>One Two One Two</strong></p>\n<h2>Currently listening to</h2>\n<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1a1xLj9W8libnO9PvJf6ao?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>', '<div id="7" class="post"><b><u>test things</u></b> Posted on 2024-09-02 00:46<br><h1>Hello mic check...</h1></div>', '<div id="8" class="post"><b><u>this should work</u></b> Posted on 2024-09-02 00:47<br><h1>Unless it doesn\'t :(</h1></div>', '<div id="9" class="post"><b><u>IITM Term over</u></b> Posted on 2024-09-02 00:53<br><h1>IITM June Term Done!</h1>\n<p>Today, well technically yesterday (Sunday) was awesome. \nThis might be the first time I\'m describing an exam day as awesome but that was the case. </p>\n<p>I had my IITM end sems and I think I did relatively well, I had 3 subjects \n    1. MLP - Machine Learning Programming\n    2. TDS - Tools in Data Science \n    3. BDM - Big Data Management </p>\n<p>I did decent in all of them but by far the easiest was TDS lol, I (and so did Varsha and many others) finished the entire exam in under 15 mins, and 5 of the minutes I went to the restroom 😹😹😹.</p>\n<p>Overall, a good end to this term, on to the next term! But before that we party in September! 😎</p></div>', '<div id="10" class="post"><b><u>Wake me up in 1 month</u></b> Posted on 2024-09-02 14:40<br><h1>It\'s that time of the year again</h1>\n<p>Summer has come and passed,<br />\nThe innocent can never last.<br />\nWake me up, When September ends. </p>\n<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3ZffCQKLFLUvYM59XKLbVm?utm_source=generator" width="70%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>', '<div id="11" class="post"><b><u>Tables Test</u></b> Posted on 2024-09-02 18:12<br><h2>Fav things</h2>\n<p>$ ax2 + bx +c = 0 $</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Example</th>\n<th>which level</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Quadratic</td>\n<td>$ ax^2 + bx +c = 0 $</td>\n<td>class VIII</td>\n</tr>\n<tr>\n<td>Simultaneous</td>\n<td>$a_1x+ b_1y= c_1\\ a_2x+ b_2y= c_2$</td>\n<td>class VI</td>\n</tr>\n<tr>\n<td>Trignometric</td>\n<td>$sin^2 \\theta + cos^2\\theta = 1 $</td>\n<td>class X</td>\n</tr>\n<tr>\n<td>Differentiation</td>\n<td>$\\frac {d^2}{dy^2} (x^n) = n(n-1)x^{n-2}$</td>\n<td>class XII</td>\n</tr>\n<tr>\n<td>Integration</td>\n<td>$ \\int x^n = \\frac{x^{n-1}}{n-1} + c $</td>\n<td>class XII</td>\n</tr>\n</tbody>\n</table></div>', '<div id="12" class="post"><b><u>this is a demo for prajol</u></b> Posted on 2024-09-02 18:16<br><h1>Demo</h1>\n<h2>F1 Drivers</h2>\n<ul>\n<li>Lando Norris</li>\n<li>Max Verstappening</li>\n<li>Oscar Pistree</li>\n<li>Lewis Jahamilton</li>\n<li>Swag Messiah </li>\n</ul>\n<blockquote>\n<p>"Don\'t do whack stuff" - Mahatma Gandhi </p>\n</blockquote>\n<p>~this is a  tilde test~</p></div>', '<div id="13" class="post"><b><u>lock in</u></b> Posted on 2024-09-02 21:44<br><p>Tomorrow is maths exam, I have 2 units left, I have not started anything...going to grind and finish Unit 1 by 11:45PM pakka.</p></div>', '<div id="14" class="post"><b><u>all done</u></b> Posted on 2024-09-03 00:18<br><p>Finished, math unit 1, also got a meta for unit 2.</p>\n<p>Shout out Adnan the goat 🐐</p>\n<p>Finished some 30 minutes late (planned to finish at 11:45, finished at 12:15) but all good, we chilling.</p>\n<p>Morb out see ya tomorrow </p></div>', '<div id="15" class="post"><b><u>about math CT</u></b> Posted on 2024-09-03 16:52<br><p>WE COOKED SO HARD 🔥🔥🔥🔥</p>\n<p>I also went to the bike service place. </p>\n<p>Confrontation is so hard, man, in an ideal world everything would be perfect but it isnt so when it isnt you have to step up and embrace uncomfortable things.</p>\n<p>You will cringe on past experience all the time, the idea is to learn from them and prepare yourself better.</p>\n<p>Being aware for everything while interacting with people is something that I must master, it is inherently hard to do so </p>\n<p>Either way, bike chain plate has now been tightened but my toolkit has been lost. I should have put on speaker and should not have taken back phone, I probably had a stupid, stupid, stupid look on my face smh 🤦\u200d♂️🤦\u200d♂️🤦\u200d♂️</p></div>', '<div id="16" class="post"><b><u>regret</u></b> Posted on 2024-09-03 23:26<br><p>i regret buwhrsm, pls tkmbck</p></div>', '<div id="17" class="post"><b><u>eth</u></b> Posted on 2024-09-04 21:21<br><p>Wish I was a crypto whale who invested everything into BTC or ETH and didnt have to study freaking VLSI and MOSFETs today. <strong>sigh</strong></p>\n<p>MCU/MPU exam was only mildly bad so that\'s the only upside to this entire thing</p></div>', '<div id="18" class="post"><b><u>why</u></b> Posted on 2024-09-04 21:29<br><p>why do i mizzersomuchhuanumankindsong-big</p></div>', '<div id="19" class="post"><b><u>never forget</u></b> Posted on 2024-09-05 02:14<br><p>never forget what you missed out, never forget all the people you could have met, never forget all the opportunities you lost because you were distracted.</p>\n<p>you being distracted was not a valid excuse and it never will be, there will always be an overwhelming number of different things. </p>\n<p>You know what you have to do in order to win....the question is...are you going to do it? or are you going to blame everyone and everything else</p>\n<p>Success comes at the price of sacrifice. I know what i have to sacrifice now. </p>\n<p>End of Sept 2024 will be the end of external project ventures, I will start to hone down and focus on DSA, C++ low level and RASC. That is all I will do in terms of C1.</p>\n<p>The IITM course will be there in terms of Vidya/C2 until atleast May/September 2024.</p>\n<p>Always remember. you messed up and the scary part is...you almost forgot it.</p></div>', '<div id="20" class="post"><b><u>grind begins</u></b> Posted on 2024-09-05 21:51<br><p>The DSA grind will begin now, and will push with full commitment starting September 2024.</p></div>', '<div id="21" class="post"><b><u>chilli sauce</u></b> Posted on 2024-09-07 20:46<br><h1>Chilli Sauce</h1>\n<p>I think I figured out what drives the intense feelings of sadness and inadequateness - not doing hard things. </p>\n<p>I finally think I found something hard to do gives you purpose.</p>\n<ul>\n<li>\n<p>Chill\'s Beginner C++ Tutorials through to His advanced tutorial will probably take me a year to complete but daily consistent work of the following things will be done for the next 1 year</p>\n</li>\n<li>\n<p>C++ </p>\n</li>\n<li>C -&gt; fundamental Programming (idk for what though) </li>\n<li>Third Dimensional Programming (hands on)</li>\n</ul>\n<p>I will update this blog with logs everyday on progress I make with that</p></div>', '<div id="22" class="post"><b><u>what i did today 08092024</u></b> Posted on 2024-09-08 01:09<br><p>Today was a pretty packed day but it could have been better, I didnt go gym for starts, marking more than a week that i\'ve not gone. \nBut in other news, I got my BS degree end sem grades and they\'re pretty good - 2A\'s and 1B </p>\n<p>bad things today some X individual stomped on my perception of success, having already secured a job offer that might be converted into a PPO even though I know more.</p>\n<p>I really need to work harder on NetFlex, starting NOW.</p>\n<p>Good Things I did today \n+ 1. Finished Stub code for socket communications in STM32 for ARM Project \n+ 2. Worked with Prajol (he did most of the work lol) for the hackathon on Monday to compile a Windows Driver for our Smart Firewall project \n+ 3. Implemented video stream for ARM project\'s IR camera in the client app\n+ 4. Worked <strong>ALOT</strong> on the LiDAR drivers for the ARM project but it just did not end up working, so I will have to go and debug tomorrow</p>\n<p>Amma made onion pakoda and dal rice for lunch, peak food imo and that is a wrap for today. (I also had oreo milkshake with Aravind na Nitish Anna and Aashiq na which was  pretty okay at best)</p>\n<p>Prasanna talked about his IELTS exam tomorrow, for which I wish him the best of luck.</p>\n<p>On to tomorrow (by the time Im writing this, today)</p>\n<p>I really want the driver development stuff to work and I should also really DEEP clean my freaking system, so much crap I can purge and reduce space.</p></div>', '<div id="23" class="post"><b><u>reminder about mobile</u></b> Posted on 2024-09-08 01:17<br><p>Reminder to self.</p>\n<p>To do for Morb \n+ Get tailwind CDN in morb\n+ Overhaul CSS and make it look <strong>nicer</strong>\n+ Add responsive layouts because it looks 💩 on mobile</p></div>', '<div id="24" class="post"><b><u>lotsa things today</u></b> Posted on 2024-09-09 00:20<br><p>In the midst of extreme self doubt, self loathing and constant comparison\n to people better than me in every single aspect deemed important has come a day where I ve done some things that i did some things that were nice.</p>\n<p>First thing I did today was setup the subdomain shantanu.ramanujapuram.com from the cPanel creds that I got. After that I set up my other email shantanu@ramanujapuram.com which feels awesome to have lol.</p>\n<p>Next thing I did was set up nextJS <sup>(prior pun not intented)</sup>, this was the painful part and the thing that was left unfinished, in short for this i did the following \n+ Created Static build of nextJS file\n+ Tried shoving all the images to CDN because I relly wanted image optimization on the gallery pages\n+ Failed at that (not finished), I think I have set up a tiny server applet that generates the JSON map of all my images that I put on this on CDN website</p>\n<p>I forgot its name its cloudinger, something I guess. need to look it up again, but yeah if I figure out the hosting of images using the CDN, I <em>should</em> be good to go in deploying to my cPanel server.</p>\n<p>We shall see</p>\n<p>A couple more things I did today <br />\n1. Finished signing WFP kernel driver for tomorrow\'s hackathon and actually got it working (i didnt do much, just sat with Prajol in VC and made sure bro stayed sane while dealing with windows 😭</p>\n<ol>\n<li>Started integration of LiDAR data with hexapod\'s electron client that I made a week ago </li>\n</ol>\n<p>I still need to do more comp prog and DSA, I HAVE to do that one a day and also change up the styles of this website, it look so ugly uck.</p>\n<p>Andha LiDAR integration kadhai eh vera level, I will most likely morb about that separately, but thats all for now</p></div>', '<div id="25" class="post"><b><u>testing points</u></b> Posted on 2024-09-09 00:42<br><ul>\n<li>Does this work?  </li>\n<li>Does this work?  </li>\n<li>Does this work?  </li>\n</ul>\n<p>hmm</p></div>', '<div id="26" class="post"><b><u>Hackathon Musings</u></b> Posted on 2024-09-10 00:09<br><p>Had SIH hackathon today, went really well. Shout out to the whole team for pulling through and actually completing the level zero prototype exactly how we imagined. I wonder if I should go to more hackathons or not, whatever I do, this decision will be based on having fun rather than just yk grinding it out for a good job. Sometimes enjoying yourself and the company of others is more important.</p>\n<p>As for my contribs today, I did the following</p>\n<ul>\n<li>Wrote some batch scripts to help prajol compile WFP Drivers  </li>\n<li>Wrote a UDP Server  </li>\n<li>Lots of Admin work in arranging PCs, bringing systems from Prasanna  </li>\n<li>Prasanna was goated today for his assist in lending his insanely good laptop  </li>\n<li>Just mostly running around tbh, still think it was rlly nice.</li>\n</ul>\n<p>Out </p></div>', '<div id="27" class="post"><b><u>shantanu.ramanujapuram.com</u></b> Posted on 2024-09-10 01:42<br><h1>Been a while</h1>\n<p><a href="https://shantanu.ramanujapuram.com">Personal Website Up!!!!</a></p></div>', '<div id="28" class="post"><b><u>price of not doing anything</u></b> Posted on 2024-09-10 08:07<br><p>You\'d initially think the price of not doing much isnt anything at all, but that is hardly the case...the price of not doing something hard at any discernible point in time  results in bad relationships, bad mental state of mind and bad decisions.</p>\n<p>The "hard thing" should be bond by following  </p>\n<ul>\n<li>\n<p>Is it rewarding (in terms of Seratonin)  </p>\n</li>\n<li>\n<p>Is it something you can document and show off at any given stage</p>\n</li>\n<li>\n<p>Is it something with equivalent "real world" usage (if you\'re into that stuff...yikes)</p>\n</li>\n</ul>\n<p>but in offence, this is it. Do hard things to enjoy life </p></div>', '<div id="29" class="post"><b><u>New features</u></b> Posted on 2024-09-11 22:50<br><p>I want to create a GitHub style/type log tracker that tracks all the logs Ive made, along with that I want to insert some easter eggs</p></div>', '<div id="30" class="post"><b><u>shit</u></b> Posted on 2024-09-12 22:50<br><p>missed Barclay\'s internship form by 4 minutes. I will not let this shit happen again, goddamn it </p></div>', '<div id="31" class="post"><b><u>klasdfja</u></b> Posted on 2024-09-15 01:21<br><p>im going to sudo rm -rf my brain if it doesn\'t stop obsessing over the creator\'s chair</p></div>', '<div id="32" class="post"><b><u>ioc</u></b> Posted on 2024-09-15 18:18<br><p>inversion of control has once again saved my life! </p></div>']/*endIndex*/
function loadContent(){return blogContent}