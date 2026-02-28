/* ============================================
   data.js — JAMB Novel Summary & Past Questions
   ============================================ */

// Question list (20 free questions)
const jambNovelQuestions = [
 {
  question: "From the novel *The Lekki Headmaster*, what was the common ritual at the morning assembly at Stardom on Tuesdays and Thursdays?",
  options: [
    "Christian and Muslim prayers",
    "Words of exaltation",
    "The second stanza of the national anthem",
    "The principal's address"
  ],
  answer: "The second stanza of the national anthem",
  explanation: "Every Tuesday and Thursday, the students and staff recited the second stanza of the national anthem as a moral and patriotic exercise.",
  reference: "The narrator mentions that it was a custom to sing the second stanza of the anthem twice a week at Stardom's assembly."
},
{
  question: "From the novel *The Lekki Headmaster*, how much was the boarding house fee per session at Stardom before it was reduced?",
  options: [
    "₦163,000",
    "₦250,000",
    "₦160,000",
    "₦93,000"
  ],
  answer: "₦163,000",
  explanation: "Before the management reduced the fees, boarding students paid one hundred and sixty-three thousand naira per session.",
  reference: "The narrator notes that the school management later slashed the ₦163,000 boarding fee to make it more affordable."
},
{
  question: "From the novel *The Lekki Headmaster*, who instructed the Chemistry teacher to conclude the assembly after Mr. Bepo burst into tears?",
  options: [
    "The Principal",
    "The Managing Director",
    "The Vice Principal",
    "The School Nurse"
  ],
  answer: "The Vice Principal",
  explanation: "When the principal broke down emotionally during the assembly, the Vice Principal calmly told the Chemistry teacher to conclude the program.",
  reference: "After Mr. Bepo’s tears surprised everyone, the Vice Principal signaled the Chemistry teacher to end the assembly respectfully."
},
{
  question: "From the novel *The Lekki Headmaster*, why did the Vice Principal contact the MD after Mr. Bepo's crying incident at the assembly?",
  options: [
    "To arrange an emergency meeting",
    "Because parents were calling with concerns",
    "To announce the principal's retirement",
    "To discuss boarding fee reductions"
  ],
  answer: "Because parents were calling with concerns",
  explanation: "Parents had begun to call the school office, expressing worry over the principal’s public outburst during assembly.",
  reference: "Soon after the incident, the Vice Principal phoned the MD to report that parents had started calling with questions."
},
{
  question: "From the novel *The Lekki Headmaster*, the principal was nicknamed 'The Lekki Headmaster' because...",
  options: [
    "He lived in Lekki during his time as a headmaster",
    "He humorously imitated characters from *The Village Headmaster*",
    "He introduced a new curriculum in the school",
    "He founded Stardom Kiddies School"
  ],
  answer: "He humorously imitated characters from *The Village Headmaster*",
  explanation: "He earned the nickname for his playful imitation of the old TV show *The Village Headmaster*, which amused students and staff.",
  reference: "Colleagues fondly called him 'The Lekki Headmaster' because of his dramatic re-enactments from *The Village Headmaster* series."
},
{
  question: "From the novel *The Lekki Headmaster*, which teachers were reprimanded because two of their candidates had Ds in their subjects?",
  options: [
    "Mr. Ope Wande and Mrs. Grace Apeh",
    "Mr. Audu and Mr. Justus Anabel",
    "Mr. Obong Ukake and Miss Taye Kareem",
    "Mr. Bepo and Mr. Ope Wande"
  ],
  answer: "Mr. Ope Wande and Mrs. Grace Apeh",
  explanation: "These teachers were cautioned for poor performance since two of their students obtained D grades in their subjects.",
  reference: "The narrative explains that only Mr. Ope Wande and Mrs. Grace Apeh were officially queried for weak results."
},
{
  question: "From the novel *The Lekki Headmaster*, who among the staff at Stardom School is also a pastor?",
  options: [
    "Mr. Justus Anabel",
    "Mr. Ope Wande",
    "Mr. Audu",
    "Mr. Obong Ukake"
  ],
  answer: "Mr. Ope Wande",
  explanation: "Mr. Ope Wande serves as both a teacher and a pastor, known for leading prayers and giving short exhortations.",
  reference: "The narration describes Mr. Wande as 'Pastor Wande,' the teacher who often led prayers during assembly."
},
{
  question: "From the novel *The Lekki Headmaster*, what was given as a reward to teachers whose students scored distinctions in their subjects?",
  options: [
    "₦30,000 each",
    "₦20,000 each",
    "Bottles of wine only",
    "A special commendation letter"
  ],
  answer: "₦30,000 each",
  explanation: "Teachers whose students excelled received ₦30,000 each as an incentive for excellence.",
  reference: "In the meeting following the results, the MD announced ₦30,000 cash prizes for distinction-producing teachers."
},
{
  question: "From the novel *The Lekki Headmaster*, why did the MD decide to send the principal home after the crying incident?",
  options: [
    "To protect the school's reputation",
    "To avoid disturbing the students further",
    "To allow the principal to rest",
    "To prepare for a replacement"
  ],
  answer: "To protect the school's reputation",
  explanation: "The MD wanted to manage the situation discreetly to prevent gossip and maintain the school’s professional image.",
  reference: "After reports spread quickly, the MD ordered Mr. Bepo to go home quietly to preserve Stardom’s reputation."
},
{
  question: "From the novel *The Lekki Headmaster*, who accompanied the principal to his home on the day of the crying incident?",
  options: [
    "The MD herself",
    "The guidance counsellor",
    "Pastor Wande",
    "The school nurse"
  ],
  answer: "Pastor Wande",
  explanation: "Pastor Wande accompanied Mr. Bepo to ensure he got home safely and received spiritual comfort.",
  reference: "It is noted that Pastor Wande, being close to the principal, volunteered to escort him home after the emotional event."
},{
  question: "From the novel *The Lekki Headmaster*, what was the student Ikenna Egbu’s speech about?",
  options: [
    "The 'Japa' trend in our modern society",
    "The principal’s contributions to the school",
    "The importance of punctuality",
    "A recent excursion to Jos"
  ],
  answer: "The 'Japa' trend in our modern society",
  explanation: "Ikenna’s speech examined the growing desire of young Nigerians to travel abroad in search of better opportunities.",
  reference: "During the valedictory programme, Ikenna Egbu addressed the 'Japa' phenomenon affecting many youths."
},
{
  question: "From the novel *The Lekki Headmaster*, why is Mr Bepo reluctant to relocate to the United Kingdom?",
  options: [
    "He does not want to leave his students",
    "He is afraid of adapting to a new environment",
    "He believes life in Nigeria is better",
    "He does not want to leave his wife and children behind"
  ],
  answer: "He does not want to leave his students",
  explanation: "Mr Bepo’s dedication to his pupils and the school community makes him hesitant to move abroad.",
  reference: "In conversation with colleagues, he insists he cannot abandon his students who still look up to him."
},
{
  question: "From the novel *The Lekki Headmaster*, what trait earned Mr Bepo the nickname 'The Lekki Headmaster'?",
  options: [
    "His strictness with students",
    "His excellent teaching skills",
    "His ability to resolve conflicts amicably",
    "His innovative teaching methods"
  ],
  answer: "His ability to resolve conflicts amicably",
  explanation: "He became known for mediating disputes calmly and fairly, a leadership quality admired by both staff and parents.",
  reference: "Mr Audu once remarked that the nickname reflected Bepo’s peace-making nature and gentle discipline."
},
{
  question: "From the novel *The Lekki Headmaster*, who coined the nickname 'The Lekki Headmaster'?",
  options: [
    "Mr Audu",
    "Mr Bepo’s wife",
    "Nike and Kike",
    "The students at Stardom Kiddies"
  ],
  answer: "Nike and Kike",
  explanation: "The playful twin sisters, Nike and Kike, first called him 'The Lekki Headmaster' after a school drama presentation.",
  reference: "It was during a rehearsal that the twins jokingly addressed him as 'Our Lekki Headmaster', and the name stuck."
},
{
  question: "From the novel *The Lekki Headmaster*, how much does Seri earn monthly as a nurse in the United Kingdom?",
  options: [
    "£3,600",
    "£6,000",
    "£10,000",
    "£1,000"
  ],
  answer: "£6,000",
  explanation: "Seri’s salary of about six thousand pounds per month illustrates the strong financial attraction of working abroad.",
  reference: "Mr Bepo compares Seri’s £6,000 monthly pay to his own modest earnings at Stardom Schools."
},
{
  question: "From the novel *The Lekki Headmaster*, what was Mr Bepo’s monthly salary at Stardom Schools?",
  options: [
    "₦400,000",
    "₦200,000",
    "₦600,000",
    "₦1,000,000"
  ],
  answer: "₦400,000",
  explanation: "Despite his years of service, Mr Bepo earned only four hundred thousand naira monthly, far below foreign standards.",
  reference: "The narrative contrasts his ₦400,000 salary with what teachers abroad receive, fueling his colleagues’ jokes."
},
{
  question: "From the novel *The Lekki Headmaster*, why do Mr Bepo’s colleagues find his reluctance to relocate amusing?",
  options: [
    "They think he is afraid of flying",
    "They assume he wants to stay in Nigeria to fulfil his entrepreneurial dreams",
    "They think he dislikes the United Kingdom",
    "They believe he should jump at the opportunity to earn more abroad"
  ],
  answer: "They believe he should jump at the opportunity to earn more abroad",
  explanation: "His friends tease him, saying anyone offered such pay abroad should not hesitate even for a day.",
  reference: "Mr Audu and Pastor Wande joke that Bepo is 'too emotional for someone turning down pounds-sterling pay'."
},
{
  question: "From the novel *The Lekki Headmaster*, why did the *Fruitful Future* school fail?",
  options: [
    "The teachers were unqualified",
    "Bepo was not willing to be involved in the ritual practices in the area",
    "The location lacked basic infrastructure",
    "The school had poor management"
  ],
  answer: "Bepo was not willing to be involved in the ritual practices in the area",
  explanation: "Mr Bepo refused to engage in local occult practices said to guarantee quick success, leading to the school’s closure.",
  reference: "He tells a friend that 'Fruitful Future School died because I refused to bow to the fetish demands of the land.'"
},
{
  question: "From the novel *The Lekki Headmaster*, which factor makes Mr Bepo cautious about entering the commercial transportation business?",
  options: [
    "Lack of startup capital",
    "Untrustworthy commercial drivers",
    "High operational costs",
    "Lack of interest in the sector"
  ],
  answer: "Untrustworthy commercial drivers",
  explanation: "He fears that dishonest drivers could mishandle funds and ruin his investment.",
  reference: "Bepo recounts how a friend’s vehicle business collapsed because the drivers were 'cleverer than their boss'."
},
{
  question: "From the novel *The Lekki Headmaster*, what does the term *roforofos* that Mr Audu used when talking about Mr Bepo most likely refer to?",
  options: [
    "Friendly greetings",
    "Petty disagreements and conflicts",
    "School projects",
    "Mismanagement issues"
  ],
  answer: "Petty disagreements and conflicts",
  explanation: "Mr Audu’s use of 'roforofos' humorously describes the minor quarrels and playful arguments among staff members.",
  reference: "The narrator explains that Mr Audu often called their staffroom banter 'roforofos', meaning small scuffles or quarrels."
},{
  question: "From the novel *The Lekki Headmaster*, what does Mr Bepo’s reluctance to relocate reveal about his values?",
  options: [
    "He values financial security over personal fulfilment",
    "He prioritises his students and professional relationships",
    "He avoids making difficult decisions",
    "He feels unprepared for a new environment"
  ],
  answer: "He prioritises his students and professional relationships",
  explanation: "Bepo’s hesitation shows his loyalty and sense of duty to his learners and colleagues rather than chasing money abroad.",
  reference: "He confides to Pastor Wande that leaving his students behind would feel like 'abandoning unfinished work.'"
},
{
  question: "From the novel *The Lekki Headmaster*, according to Bepo, why is the hourly payment system beneficial?",
  options: [
    "It allows employees to earn more",
    "It enables employees to change jobs easily",
    "It reduces the workload for employees",
    "It allows employees to take more holidays"
  ],
  answer: "It allows employees to earn more",
  explanation: "Bepo admires the fairness of being paid strictly for each hour of work rather than a fixed low salary.",
  reference: "He remarks that in the UK, 'the clock pays you honestly — every extra hour counts.'"
},
{
  question: "From the novel *The Lekki Headmaster*, what is the approximate annual migration rate of Nigerian doctors?",
  options: [
    "300 out of 3 000",
    "2 000 out of 3 000",
    "500 out of 3 000",
    "1 000 out of 3 000"
  ],
  answer: "2 000 out of 3 000",
  explanation: "The story notes that a large majority of trained doctors seek work abroad each year.",
  reference: "Bepo quotes statistics showing that roughly two-thirds (≈ 2 000 of 3 000) leave Nigeria annually."
},
{
  question: "From the novel *The Lekki Headmaster*, what unethical act did Mr Nku engage in before relocating abroad?",
  options: [
    "He sold the school’s property",
    "He borrowed ₦2 million from the school’s cooperative",
    "He falsified documents to gain a visa",
    "He stole money from the school’s treasury"
  ],
  answer: "He borrowed ₦2 million from the school’s cooperative",
  explanation: "Mr Nku secretly obtained a loan and left the country without repayment.",
  reference: "The MD laments that Nku 'took two million from the staff cooperative and vanished to London.'"
},
{
  question: "From the novel *The Lekki Headmaster*, why did one of the school drivers attempt to sell the school bus?",
  options: [
    "To pay his son’s tuition fees abroad",
    "To fund his wife’s business",
    "To clear his personal debt",
    "To finance a trip to the UK"
  ],
  answer: "To finance a trip to the UK",
  explanation: "The desperate driver wanted quick cash to process his own travel documents for migration.",
  reference: "Bepo recalls the scandal where a driver tried selling a school bus to raise 'travel money to UK.'"
},
{
  question: "From the novel *The Lekki Headmaster*, according to the story, why do most Nigerians prefer relocating to the UK?",
  options: [
    "Better climate conditions",
    "Easier visa application process",
    "Free education and healthcare for their children",
    "Higher job opportunities compared to other countries"
  ],
  answer: "Free education and healthcare for their children",
  explanation: "The UK is portrayed as appealing because families enjoy subsidised schooling and medical care.",
  reference: "Mrs Bepo mentions that in the UK 'schooling and hospital visits for children are almost free.'"
},
{
  question: "From the novel *The Lekki Headmaster*, what proverb does Bepo recall from his Idoma co-tenant?",
  options: [
    "Whether the employer records gains or not, the employee will yet take home his full pay.",
    "Hard work always leads to success.",
    "Life’s intriguing tests yield the same results for everyone.",
    "The sugarcane and the bitter leaf get different tastes from the same rain."
  ],
  answer: "Whether the employer records gains or not, the employee will yet take home his full pay.",
  explanation: "The proverb reminds Bepo that salaried workers are rarely affected by an employer’s profit or loss.",
  reference: "His Idoma neighbour tells him, 'no matter how the market ends, the worker still collects his pay.'"
},
{
  question: "From the novel *The Lekki Headmaster*, what lesson does Hope’s story about relocating to the UK teach?",
  options: [
    "Financial independence is critical when relocating",
    "Working while studying guarantees success",
    "Couples always succeed when they share responsibilities",
    "Relocation is a foolproof plan for success"
  ],
  answer: "Financial independence is critical when relocating",
  explanation: "Hope’s struggles abroad reveal that without savings and planning, migration can lead to hardship.",
  reference: "Bepo narrates Hope’s experience as proof that 'poverty follows you if you travel without preparation.'"
},
{
  question: "From the novel *The Lekki Headmaster*, how much did Sola and her husband borrow to fund their relocation?",
  options: [
    "₦2 million",
    "₦4 million",
    "₦3 million",
    "₦5 million"
  ],
  answer: "₦4 million",
  explanation: "They secured a ₦4 million loan hoping to repay quickly after settling abroad.",
  reference: "Their friends warned that taking a ₦4 million loan for relocation was too risky."
},
{
  question: "From the novel *The Lekki Headmaster*, where does Bepo live?",
  options: [
    "Adeniyi Jones, Ikeja, Lagos",
    "Oniru, Victoria Island, Lagos",
    "Yaba, Lagos",
    "Obalende, Ikoyi, Lagos"
  ],
  answer: "Adeniyi Jones, Ikeja, Lagos",
  explanation: "Bepo resides in Adeniyi Jones, Ikeja — a middle-class neighbourhood close to his workplace.",
  reference: "The story situates his residence at Adeniyi Jones in Ikeja, Lagos State."
},{
  question: "From the novel *The Lekki Headmaster*, why does Mr Ignatius want to relocate with his family?",
  options: [
    "To find better jobs abroad",
    "To secure a better future for his children",
    "To reunite with his extended family abroad",
    "To enrol his children in Stardom schools abroad"
  ],
  answer: "To secure a better future for his children",
  explanation: "Mr Ignatius believes that relocating overseas will give his children access to quality education and a stable life.",
  reference: "He tells Bepo that his dream is 'to see Favour and her brother grow where tomorrow already looks bright.'"
},
{
  question: "From the novel *The Lekki Headmaster*, what skill did Mrs Ignatius begin learning to support her family abroad?",
  options: [
    "Accounting and clerical work",
    "Cloth weaving and Adire",
    "Tailoring and hairdressing",
    "Photography"
  ],
  answer: "Tailoring and hairdressing",
  explanation: "Mrs Ignatius starts learning tailoring and hairdressing to ensure she can earn income when they eventually relocate.",
  reference: "She proudly tells her neighbour that she has started 'learning to sew and braid hair for survival abroad.'"
},
{
  question: "From the novel *The Lekki Headmaster*, what disrupted the Ignatius family’s relocation plans?",
  options: [
    "Mr Ignatius lost his job",
    "Mrs Ignatius changed her mind about relocating",
    "A DNA test revealed Mr Ignatius was not Favour’s biological father",
    "Their visa application was denied"
  ],
  answer: "A DNA test revealed Mr Ignatius was not Favour’s biological father",
  explanation: "A shocking DNA result caused family conflict and halted their travel arrangements.",
  reference: "The story notes that the discovery about Favour’s paternity 'shattered the relocation dream overnight.'"
},
{
  question: "From the novel *The Lekki Headmaster*, why was Mr Ayesoro transferred from his teaching role?",
  options: [
    "He had poor teaching performance",
    "A student had recurring nightmares about him",
    "He requested a transfer for personal reasons",
    "The school wanted him to work in their property division"
  ],
  answer: "A student had recurring nightmares about him",
  explanation: "After reports of a pupil repeatedly dreaming of him, the MD decided to reassign Ayesoro to calm the situation.",
  reference: "It was said that a child’s frightening dreams about him led to his reassignment."
},
{
  question: "From the novel *The Lekki Headmaster*, what nickname did students give to Mr Ayesoro because of his tribal marks?",
  options: [
    "Mr Owala",
    "Mr Ologbo",
    "Mr Egun",
    "Mr Omole"
  ],
  answer: "Mr Ologbo",
  explanation: "The children jokingly called him ‘Mr Ologbo’ (cat) because the scars on his face reminded them of a cat’s whiskers.",
  reference: "Narration states that pupils nicknamed him ‘Ologbo’ on account of his tribal marks."
},
{
  question: "From the novel *The Lekki Headmaster*, why did the school transfer Mr Ayesoro to Stardom Hub?",
  options: [
    "To punish him for misconduct",
    "To provide him with a better job opportunity",
    "To reward him for his dedication",
    "To retain Mrs Ladele’s children in the school"
  ],
  answer: "To retain Mrs Ladele’s children in the school",
  explanation: "The MD feared losing Mrs Ladele’s children if Ayesoro remained their teacher, so she reassigned him to the Hub.",
  reference: "Management resolved to move Ayesoro so that Mrs Ladele would not withdraw her children from Stardom."
},
{
  question: "From the novel *The Lekki Headmaster*, what does the MD discover about the land Stardom acquired two years ago?",
  options: [
    "It is being used for illegal activities",
    "It has been sold without her knowledge",
    "Teachers and staff are using it as a car park",
    "It is being developed into a new school building"
  ],
  answer: "Teachers and staff are using it as a car park",
  explanation: "Instead of building on the land, staff members turned it into a convenient car park for themselves.",
  reference: "During inspection, the MD was shocked to find the expensive plot serving as an employee car lot."
},
{
  question: "From the novel *The Lekki Headmaster*, how are the teachers and staff at Stardom able to afford cars?",
  options: [
    "They are receiving bribes",
    "They have taken loans from the school’s cooperative society",
    "They are paid high salaries",
    "They are running side businesses"
  ],
  answer: "They have taken loans from the school’s cooperative society",
  explanation: "Most staff purchased vehicles through low-interest loans granted by the school’s co-op.",
  reference: "Board records show that the Stardom Cooperative Society funded many teachers’ car purchases."
},
{
  question: "From the novel *The Lekki Headmaster*, how much money is in the account of the Stardom Cooperative Society, as discovered by the board?",
  options: [
    "Over ₦50 million",
    "₦200 million",
    "₦45 million",
    "₦95 million"
  ],
  answer: "Over ₦50 million",
  explanation: "Audit findings reveal that the cooperative had accumulated more than fifty million naira in savings and loans.",
  reference: "The MD exclaims that the co-op account had ‘over ₦50 million lying quietly in it.’"
},
{
  question: "From the novel *The Lekki Headmaster*, what simile does the MD use to describe the potential risk of the cooperative funds?",
  options: [
    "It’s like building castles in the air",
    "It’s like hanging a snake in the roof and going to bed",
    "It’s like lighting a fire in the middle of a haystack",
    "It’s like giving a sword to your enemy"
  ],
  answer: "It’s like hanging a snake in the roof and going to bed",
  explanation: "The MD warns that ignoring the huge fund is dangerous, using this vivid simile to show the risk of loss or theft.",
  reference: "She cautions the board that ‘keeping so much money unmonitored is like hanging a snake in the roof and going to bed.’"
}
];



