var blogContent =  /*startIndex*/['<div id="1" class="post"><b><u>Test-Post</u></b> Posted on 2024-09-02 00:28<br><h1>Hi this is a test post!</h1>\n<ul>\n<li>bing</li>\n<li>chill</li>\n<li>ING</li>\n</ul></div>', '<div id="2" class="post"><b><u>code_example</u></b> Posted on 2024-09-02 00:28<br><h1>below is a code example</h1>\n<ul>\n<li>x </li>\n<li>y </li>\n<li>z</li>\n</ul>\n<p><code>js\nfunction main(){    \n    var formattedContent = loadContent();\n    var toLoad = document.getElementsByClassName("blogPart")[0]\n    console.log("Hellos");\n    for(x of formattedContent.reverse()){ //reversed so that newest posts pop up first\n        toLoad.innerHTML += `&lt;p class = "Loaded"&gt;${x}&lt;/p&gt;&lt;br&gt;&lt;br&gt;`;\n    }\n}</code></p></div>', '<div id="3" class="post"><b><u>images-work-too</u></b> Posted on 2024-09-02 00:28<br><h2>Sometimes you\'ve got to close a door to open a window</h2>\n<p><img alt="Some Image" src="https://www.rollingstone.com/wp-content/uploads/2019/05/TylerTheCreator_SamRock.jpg?resize=1800,1200&amp;w=1200" /></p></div>', '<div id="4" class="post"><b><u>newMarkdown</u></b> Posted on 2024-09-02 00:28<br><h1>Hello</h1>\n<hr />\n<blockquote>\n<p>This should appear in markdown</p>\n</blockquote>\n<ul>\n<li>1  </li>\n<li>2    </li>\n<li>3  </li>\n</ul>\n<p><del>strike</del></p></div>', '<div id="5" class="post"><b><u>pappa_post</u></b> Posted on 2024-09-02 00:28<br><h2>Fav things</h2>\n<p>this is a list of my favourite things\n+ coffee\n+ walking\n+ swimming\n+ talking to aanchal magu\n    + reading comics\n    + watching series/movies</p>\n<p>$ ax2 + bx +c = 0 $</p>\n<p>Name | Example | which level\n------------|----------|-----\nQuadratic | $ ax^2 + bx +c = 0 $ | class VIII\nSimultaneous | $a_1x+ b_1y= c_1\\ a_2x+ b_2y= c_2$ |  class VI\nTrignometric | $sin^2 \\theta + cos^2\\theta = 1 $ | class X\nDifferentiation| $\\frac {d^2}{dy^2} (x^n) = n(n-1)x^{n-2}$ | class XII \nIntegration | $ \\int x^n = \\frac{x^{n-1}}{n-1} + c $ | class XII</p></div>', '<div id="6" class="post"><b><u>hello is this thing on</u></b> Posted on 2024-09-02 00:41<br><h1>Test</h1>\n<p>Mic Check <strong>One Two One Two</strong></p>\n<h2>Currently listening to</h2>\n<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1a1xLj9W8libnO9PvJf6ao?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>', '<div id="7" class="post"><b><u>test things</u></b> Posted on 2024-09-02 00:46<br><h1>Hello mic check...</h1></div>', '<div id="8" class="post"><b><u>this should work</u></b> Posted on 2024-09-02 00:47<br><h1>Unless it doesn\'t :(</h1></div>', '<div id="9" class="post"><b><u>IITM Term over</u></b> Posted on 2024-09-02 00:53<br><h1>IITM June Term Done!</h1>\n<p>Today, well technically yesterday (Sunday) was awesome. \nThis might be the first time I\'m describing an exam day as awesome but that was the case. </p>\n<p>I had my IITM end sems and I think I did relatively well, I had 3 subjects \n    1. MLP - Machine Learning Programming\n    2. TDS - Tools in Data Science \n    3. BDM - Big Data Management </p>\n<p>I did decent in all of them but by far the easiest was TDS lol, I (and so did Varsha and many others) finished the entire exam in under 15 mins, and 5 of the minutes I went to the restroom 😹😹😹.</p>\n<p>Overall, a good end to this term, on to the next term! But before that we party in September! 😎</p></div>', '<div id="10" class="post"><b><u>Wake me up in 1 month</u></b> Posted on 2024-09-02 14:40<br><h1>It\'s that time of the year again</h1>\n<p>Summer has come and passed,<br />\nThe innocent can never last.<br />\nWake me up, When September ends. </p>\n<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3ZffCQKLFLUvYM59XKLbVm?utm_source=generator" width="70%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>', '<div id="11" class="post"><b><u>Tables Test</u></b> Posted on 2024-09-02 18:12<br><h2>Fav things</h2>\n<p>$ ax2 + bx +c = 0 $</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Example</th>\n<th>which level</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Quadratic</td>\n<td>$ ax^2 + bx +c = 0 $</td>\n<td>class VIII</td>\n</tr>\n<tr>\n<td>Simultaneous</td>\n<td>$a_1x+ b_1y= c_1\\ a_2x+ b_2y= c_2$</td>\n<td>class VI</td>\n</tr>\n<tr>\n<td>Trignometric</td>\n<td>$sin^2 \\theta + cos^2\\theta = 1 $</td>\n<td>class X</td>\n</tr>\n<tr>\n<td>Differentiation</td>\n<td>$\\frac {d^2}{dy^2} (x^n) = n(n-1)x^{n-2}$</td>\n<td>class XII</td>\n</tr>\n<tr>\n<td>Integration</td>\n<td>$ \\int x^n = \\frac{x^{n-1}}{n-1} + c $</td>\n<td>class XII</td>\n</tr>\n</tbody>\n</table></div>', '<div id="12" class="post"><b><u>this is a demo for prajol</u></b> Posted on 2024-09-02 18:16<br><h1>Demo</h1>\n<h2>F1 Drivers</h2>\n<ul>\n<li>Lando Norris</li>\n<li>Max Verstappening</li>\n<li>Oscar Pistree</li>\n<li>Lewis Jahamilton</li>\n<li>Swag Messiah </li>\n</ul>\n<blockquote>\n<p>"Don\'t do whack stuff" - Mahatma Gandhi </p>\n</blockquote>\n<p>~this is a  tilde test~</p></div>', '<div id="13" class="post"><b><u>lock in</u></b> Posted on 2024-09-02 21:44<br><p>Tomorrow is maths exam, I have 2 units left, I have not started anything...going to grind and finish Unit 1 by 11:45PM pakka.</p></div>', '<div id="14" class="post"><b><u>all done</u></b> Posted on 2024-09-03 00:18<br><p>Finished, math unit 1, also got a meta for unit 2.</p>\n<p>Shout out Adnan the goat 🐐</p>\n<p>Finished some 30 minutes late (planned to finish at 11:45, finished at 12:15) but all good, we chilling.</p>\n<p>Morb out see ya tomorrow </p></div>', '<div id="15" class="post"><b><u>about math CT</u></b> Posted on 2024-09-03 16:52<br><p>WE COOKED SO HARD 🔥🔥🔥🔥</p>\n<p>I also went to the bike service place. </p>\n<p>Confrontation is so hard, man, in an ideal world everything would be perfect but it isnt so when it isnt you have to step up and embrace uncomfortable things.</p>\n<p>You will cringe on past experience all the time, the idea is to learn from them and prepare yourself better.</p>\n<p>Being aware for everything while interacting with people is something that I must master, it is inherently hard to do so </p>\n<p>Either way, bike chain plate has now been tightened but my toolkit has been lost. I should have put on speaker and should not have taken back phone, I probably had a stupid, stupid, stupid look on my face smh 🤦\u200d♂️🤦\u200d♂️🤦\u200d♂️</p></div>', '<div id="16" class="post"><b><u>regret</u></b> Posted on 2024-09-03 23:26<br><p>i regret buwhrsm, pls tkmbck</p></div>', '<div id="17" class="post"><b><u>eth</u></b> Posted on 2024-09-04 21:21<br><p>Wish I was a crypto whale who invested everything into BTC or ETH and didnt have to study freaking VLSI and MOSFETs today. <strong>sigh</strong></p>\n<p>MCU/MPU exam was only mildly bad so that\'s the only upside to this entire thing</p></div>', '<div id="18" class="post"><b><u>why</u></b> Posted on 2024-09-04 21:29<br><p>why do i mizzersomuchhuanumankindsong-big</p></div>', '<div id="19" class="post"><b><u>never forget</u></b> Posted on 2024-09-05 02:14<br><p>never forget what you missed out, never forget all the people you could have met, never forget all the opportunities you lost because you were distracted.</p>\n<p>you being distracted was not a valid excuse and it never will be, there will always be an overwhelming number of different things. </p>\n<p>You know what you have to do in order to win....the question is...are you going to do it? or are you going to blame everyone and everything else</p>\n<p>Success comes at the price of sacrifice. I know what i have to sacrifice now. </p>\n<p>End of Sept 2024 will be the end of external project ventures, I will start to hone down and focus on DSA, C++ low level and RASC. That is all I will do in terms of C1.</p>\n<p>The IITM course will be there in terms of Vidya/C2 until atleast May/September 2024.</p>\n<p>Always remember. you messed up and the scary part is...you almost forgot it.</p></div>', '<div id="20" class="post"><b><u>grind begins</u></b> Posted on 2024-09-05 21:51<br><p>The DSA grind will begin now, and will push with full commitment starting September 2024.</p></div>']/*endIndex*/
function loadContent(){return blogContent}