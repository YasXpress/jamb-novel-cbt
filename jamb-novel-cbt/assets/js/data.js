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
},{
  question: "From the novel *The Lekki Headmaster*, what decision does the board make about loans from the cooperative?",
  options: [
    "No loans can be given to staff under any circumstances",
    "All loan requests must be approved by the staff union",
    "Staff loans cannot exceed ₦250,000",
    "The cooperative must stop lending money to staff immediately"
  ],
  answer: "Staff loans cannot exceed ₦250,000",
  explanation: "After reviewing financial records, the board fixed a ₦250,000 limit on loans to ensure fair access and prevent misuse of funds.",
  reference: "The MD announced that henceforth, no cooperative loan above ₦250,000 would be approved for any staff member."
},
{
  question: "From the novel *The Lekki Headmaster*, why do some teachers at Stardom Schools dread Open Day?",
  options: [
    "They are afraid of being sacked",
    "They dislike interacting with parents",
    "Parents often come with complaints",
    "The day involves long hours of work"
  ],
  answer: "Parents often come with complaints",
  explanation: "Teachers view Open Day as a tense day when parents bombard them with grievances about their children’s performance.",
  reference: "It is described that teachers secretly feared Open Day because 'parents came not to praise, but to complain.'"
},
{
  question: "From the novel *The Lekki Headmaster*, what did Mr Guta demand in the MD’s office regarding Mr Fafore?",
  options: [
    "A salary increase for Mr Fafore",
    "The immediate dismissal of Mr Fafore",
    "A change in his son’s class teacher",
    "A public apology from Mr Fafore"
  ],
  answer: "The immediate dismissal of Mr Fafore",
  explanation: "Mr Guta angrily requested that Mr Fafore be sacked after discovering an error in his child’s notebook.",
  reference: "Mr Guta stormed the MD’s office, insisting that the teacher be 'dismissed without delay for incompetence.'"
},
{
  question: "From the novel *The Lekki Headmaster*, why does the school no longer allow students to copy notes from the Class Prefect?",
  options: [
    "It disrupts classroom management",
    "A parent sued the school for this practice",
    "The students often make errors when copying notes",
    "The teachers believe it wastes time"
  ],
  answer: "A parent sued the school for this practice",
  explanation: "Following a parent’s legal action over copied notes, the MD banned the practice to protect the school’s reputation.",
  reference: "The narration mentions that the policy was abolished after a parent took legal steps over a copied note issue."
},
{
  question: "From the novel *The Lekki Headmaster*, what reason did Mr Guta give for being angry with Mr Fafore?",
  options: [
    "He found a grammatical error in his son’s note",
    "He felt Mr Fafore was not teaching effectively",
    "He was unhappy with Mr Fafore’s attitude",
    "His son complained about being treated unfairly"
  ],
  answer: "He found a grammatical error in his son’s note",
  explanation: "Mr Guta was furious when he spotted a grammar mistake in his son’s notebook and blamed Mr Fafore for negligence.",
  reference: "The story states that his anger was triggered by a grammatical error which he attributed to poor teaching."
},
{
  question: "From the novel *The Lekki Headmaster*, what grammatical rule was the source of disagreement between the MD and the principal?",
  options: [
    "The use of the subjunctive mood",
    "The use of conjunctions such as 'and'",
    "The subject-verb agreement with phrases like 'as well as'",
    "The proper placement of modifiers"
  ],
  answer: "The subject-verb agreement with phrases like 'as well as'",
  explanation: "The MD and the principal disagreed over the correct verb usage in sentences containing 'as well as.'",
  reference: "Their discussion became heated when they differed on how 'as well as' affects subject-verb agreement."
},
{
  question: "From the novel *The Lekki Headmaster*, what did Mr Audu do after the MD felt deflated that she had wrongly sacked Mr Fafore?",
  options: [
    "He defended Mr Fafore’s teaching methods",
    "He proposed new rules for grammar checks",
    "He suggested a training session for the staff",
    "He cracked a joke to lighten the mood"
  ],
  answer: "He cracked a joke to lighten the mood",
  explanation: "Mr Audu diffused the tension in the office by making a light-hearted joke to cheer up the MD.",
  reference: "Seeing her mood drop, Mr Audu humorously remarked, causing everyone in the room to laugh."
},
{
  question: "From the novel *The Lekki Headmaster*, what conclusion did the teachers draw from Mr Fafore’s sack incident?",
  options: [
    "Open Day is a stressful event",
    "There is no job security in the establishment",
    "Parents should not interfere with teaching methods",
    "The MD is always fair in her decisions"
  ],
  answer: "There is no job security in the establishment",
  explanation: "The staff realized that even a minor complaint could cost someone their job, proving how unstable their positions were.",
  reference: "After Fafore’s dismissal, whispers spread that 'nobody’s job is safe in Stardom.'"
},
{
  question: "From the novel *The Lekki Headmaster*, why did Bepo leave Beesway Group of School?",
  options: [
    "He was accused of sharing confidential information with the parents",
    "He was dissatisfied with the grammatical error in the school’s name",
    "He witnessed an event that he considered ungodly",
    "He disagreed with the director about his salary"
  ],
  answer: "He witnessed an event that he considered ungodly",
  explanation: "Bepo left the school after seeing immoral practices that clashed with his Christian beliefs.",
  reference: "The narration explains that his conscience couldn’t allow him to remain in a place he saw as spiritually defiled."
},
{
  question: "From the novel *The Lekki Headmaster*, what grammatical issue did Bepo raise about Beesway Group of School’s name?",
  options: [
    "The spelling of 'Beesway'",
    "The use of singular instead of plural in 'Group of School'",
    "The absence of a hyphen in the name",
    "The misuse of capital letters in the name"
  ],
  answer: "The use of singular instead of plural in 'Group of School'",
  explanation: "Bepo pointed out that it should be 'Group of Schools' since the name refers to more than one institution.",
  reference: "He humorously corrected them, saying the proper expression is 'Group of Schools, not Group of School.'"
},{
  question: "From the novel *The Lekki Headmaster*, why did the director of 'Beesway Group of School' claim the ritual involving the cow was necessary?",
  options: [
    "To pray for his late father who gave him the land",
    "To bring in more pupils to the school",
    "To appease the parents who had raised complaints",
    "To conduct a purification ceremony for the school"
  ],
  answer: "To bring in more pupils to the school",
  explanation: "The director claimed that the sacrifice would spiritually attract more pupils and bring prosperity to the school.",
  reference: "Bepo recalled the director insisting that the ritual with the cow would 'open doors for more enrolments.'"
},
{
  question: "From the novel *The Lekki Headmaster*, what led to the closure of the school Bepo started?",
  options: [
    "Poor road conditions in the neighbourhood",
    "Parents' dissatisfaction with the curriculum",
    "A failed spiritual ritual to attract more pupils",
    "Mismanagement of school funds"
  ],
  answer: "A failed spiritual ritual to attract more pupils",
  explanation: "Bepo refused to perform the spiritual rites required by the local community, leading to a lack of enrolment and eventual closure.",
  reference: "The novel explains that his school failed because he rejected 'ritual practices that locals saw as essential for growth.'"
},
{
  question: "From the novel *The Lekki Headmaster*, what was the cost of the form for the position of Head Boy or Head Girl in the school election at Stardom?",
  options: ["₦25,000", "₦40,000", "₦50,000", "₦60,000"],
  answer: "₦50,000",
  explanation: "Each candidate for the student leadership position had to purchase a ₦50,000 nomination form.",
  reference: "It is stated that the form for Head Boy or Head Girl cost ₦50,000, sparking debates about fairness among students."
},
{
  question: "From the novel *The Lekki Headmaster*, what inappropriate remark did Banky make during Speech Day?",
  options: [
    "Tosh was unqualified for the position",
    "Tosh was the son of an ex-convict",
    "Tosh bribed his way into the election",
    "Tosh lacked the required skill for the role"
  ],
  answer: "Tosh was the son of an ex-convict",
  explanation: "Banky embarrassed Tosh by publicly calling him 'the son of an ex-convict' during Speech Day.",
  reference: "The statement caused a stir during the event, making the MD intervene to maintain decorum."
},
{
  question: "From the novel *The Lekki Headmaster*, why was Tosh’s father, Chief Ogba, detained for 36 months?",
  options: [
    "He was an ex-convict for theft",
    "He failed to pay a school debt",
    "He was accused of fraud but acquitted later",
    "He faced trial for alleged misappropriation"
  ],
  answer: "He was accused of fraud but acquitted later",
  explanation: "Chief Ogba was wrongly accused of fraud and detained for three years before being cleared of all charges.",
  reference: "The narrative mentions that Tosh’s father spent 36 months in detention on false fraud accusations."
},
{
  question: "From the novel *The Lekki Headmaster*, which of the following waterfalls is the highest in West Africa, according to the novel?",
  options: [
    "Gurara Falls",
    "Erin Ijesha Waterfalls",
    "Ikogosi Warm Springs",
    "Owu Waterfalls"
  ],
  answer: "Owu Waterfalls",
  explanation: "The novel notes that Owu Waterfalls, located in Kwara State, is regarded as the highest in West Africa.",
  reference: "During an excursion discussion, Bepo informed the students that Owu Waterfalls is the highest in West Africa."
},
{
  question: "From the novel *The Lekki Headmaster*, what is the primary reason Mr Bepo organises excursions for the students at Stardom?",
  options: [
    "To give them a good grasp of their country before they all go abroad",
    "To promote Stardom as a school that values excursions",
    "To prepare students for geography exams",
    "To encourage tourism in Nigeria"
  ],
  answer: "To give them a good grasp of their country before they all go abroad",
  explanation: "Bepo wanted his students to know Nigeria’s cultural and historical landmarks before pursuing studies overseas.",
  reference: "He told the students that 'a person who knows his country well will value the world even more.'"
},
{
  question: "From the novel *The Lekki Headmaster*, which of the following festivals have the students attended?",
  options: [
    "i, ii, iii only",
    "i and iv only",
    "ii and iii only",
    "i, ii, iii, iv"
  ],
  answer: "i, ii, iii, iv",
  explanation: "The students visited and experienced all four festivals — Calabar Carnival, Osun Oshogbo, Argungu, and Abuja Carnival.",
  reference: "The novel lists these cultural trips as part of Stardom’s commitment to cultural education."
},
{
  question: "From the novel *The Lekki Headmaster*, how did Mr Bepo inspire students after they visited areas like Mushin and Ajegunle during their excursions?",
  options: [
    "By promising to relocate them to better areas",
    "By sharing stories of successful individuals who rose from slums",
    "By discouraging them from visiting such areas again",
    "By giving them motivational books about success"
  ],
  answer: "By sharing stories of successful individuals who rose from slums",
  explanation: "Bepo used real-life examples of people who came from poor backgrounds and became successful to motivate his students.",
  reference: "After visiting the slum areas, he reminded them that 'greatness is not about where you start, but how you finish.'"
},
{
  question: "From the novel *The Lekki Headmaster*, what was the source of the name 'Badagry', according to the novel?",
  options: [
    "It was named after the Badagry River",
    "It was derived from 'agbadarigi'",
    "It originated from a European explorer’s name",
    "It was named after a nearby slave market"
  ],
  answer: "It was derived from 'agbadarigi'",
  explanation: "The name 'Badagry' was derived from 'agbadarigi,' the name of a local farmstead that early settlers pronounced differently.",
  reference: "The teacher explained that 'Badagry' came from 'Agbadarigi,' showing how names evolve through pronunciation over time."
},{
  question: "From the novel *The Lekki Headmaster*, what does Mr Bepo mean by the term 'new slavery'?",
  options: [
    "Africans willingly move abroad for better opportunities",
    "The continuation of slave trade in some regions",
    "The exploitation of Africans by modern companies",
    "Africans selling themselves into physical labour"
  ],
  answer: "Africans willingly move abroad for better opportunities",
  explanation: "Bepo uses 'new slavery' to describe how many Africans now willingly travel abroad for work and education, often under harsh conditions.",
  reference: "He notes that 'our people now sell themselves to stress in foreign lands just to survive — that is the new slavery.'"
},
{
  question: "From the novel *The Lekki Headmaster*, why was Mr Bepo moved during his visit to the Black Heritage Museum?",
  options: [
    "He felt nostalgic about Nigeria’s history",
    "He was impressed by the museum’s architecture",
    "He empathised with the suffering of slaves in the past",
    "He remembered his ancestors were involved in slavery"
  ],
  answer: "He empathised with the suffering of slaves in the past",
  explanation: "The sight of shackles, chains, and relics deeply touched Bepo as he imagined the pain endured by enslaved Africans.",
  reference: "He became emotional while viewing the exhibits showing the cruelty of the slave trade era."
},
{
  question: "From the novel *The Lekki Headmaster*, what is the meaning of the term 'japa' as used in the novel?",
  options: [
    "The struggle for financial independence",
    "To travel abroad in search of better opportunities",
    "To resist colonial influences in modern times",
    "To work as a slave in a foreign country"
  ],
  answer: "To travel abroad in search of better opportunities",
  explanation: "In the context of the story, 'japa' refers to Nigerians migrating to other countries for greener pastures.",
  reference: "The term was used by students during discussions on relocation, meaning 'to escape Nigeria for a better life abroad.'"
},
{
  question: "From the novel *The Lekki Headmaster*, why was Mr Bepo initially reluctant to renew his passport?",
  options: [
    "He had lost his passport",
    "He was too busy with his teaching duties",
    "He had heard about the hassles applicants were facing",
    "He did not plan to travel abroad anytime soon"
  ],
  answer: "He had heard about the hassles applicants were facing",
  explanation: "Mr Bepo delayed his passport renewal because he had heard about the long queues and corrupt practices at passport offices.",
  reference: "He hesitated after hearing that people spent weeks struggling to renew their passports."
},
{
  question: "From the novel *The Lekki Headmaster*, how much was the official fee for a 10-year passport renewal (64 pages)?",
  options: ["₦250,000", "₦100,000", "₦1,000,000", "₦70,000"],
  answer: "₦100,000",
  explanation: "The official charge for a 10-year, 64-page Nigerian passport renewal was ₦100,000 according to the narrative.",
  reference: "Bepo confirmed that the new passport he applied for cost ₦100,000."
},
{
  question: "From the novel *The Lekki Headmaster*, why did Bepo choose Ibadan for his passport renewal?",
  options: [
    "It was closer to his location",
    "He was advised that the process would be easier there",
    "He had a friend who worked in immigration there",
    "The fees were lower in Ibadan"
  ],
  answer: "He was advised that the process would be easier there",
  explanation: "Bepo travelled to Ibadan because he was told that passport renewal there was faster and less stressful.",
  reference: "He journeyed to Ibadan on the advice that the officers there worked more efficiently."
},
{
  question: "From the novel *The Lekki Headmaster*, what can be inferred about Tai’s role in the passport renewal process?",
  options: [
    "He is a middleman exploiting applicants",
    "He was a legitimate immigration officer",
    "He was an honest businessman offering his services",
    "He was unaware of the actual renewal process"
  ],
  answer: "He is a middleman exploiting applicants",
  explanation: "Tai presented himself as a helper but was actually a go-between who collected bribes from applicants to fast-track their processing.",
  reference: "Tai turned out to be a middleman working with corrupt officers to make money off desperate applicants."
},
{
  question: "From the novel *The Lekki Headmaster*, what does the phrase 'in cahoots' most likely mean in the context of Tai and the immigration staff?",
  options: [
    "In conflict with",
    "Secretly collaborating with",
    "Officially associated with",
    "Unknowingly assisting"
  ],
  answer: "Secretly collaborating with",
  explanation: "The expression means that Tai and some immigration staff were secretly working together to exploit applicants.",
  reference: "The narrative explains that Tai was 'in cahoots' with the officers, implying secret cooperation."
},
{
  question: "From the novel *The Lekki Headmaster*, why does Mr Bepo delay his flight to the UK?",
  options: [
    "The airline cancels his flight",
    "He is required to attend a farewell celebration",
    "He needs to finalise his resignation paperwork",
    "He has a last-minute meeting with the MD"
  ],
  answer: "He is required to attend a farewell celebration",
  explanation: "Bepo postponed his trip because the school staff organised a farewell event in his honour.",
  reference: "He stayed back to attend the farewell ceremony held by his colleagues before leaving Nigeria."
},
{
  question: "From the novel *The Lekki Headmaster*, what Yoruba adage does Mr Bepo recall after the debate at the farewell celebration?",
  options: [
    "A wise man never leaves his work unfinished",
    "The work of a teacher outlives their time",
    "Success is not final; failure is not fatal",
    "Even if the master carver retires, his carvings remain"
  ],
  answer: "Even if the master carver retires, his carvings remain",
  explanation: "Bepo reflects on this Yoruba proverb, meaning that a person’s legacy endures long after they are gone.",
  reference: "He remembered the Yoruba saying: 'Even if the master carver retires, his carvings remain,' symbolising lasting impact."
},{
  question: "From the novel *The Lekki Headmaster*, why does Mr Bepo yell 'Noooo!' during the drama club performance at the farewell celebration?",
  options: [
    "He was disappointed with the dance",
    "He is overwhelmed by memories of the Heritage Slave Museum",
    "He feels the performance is disrespectful",
    "He disagrees with the students' portrayal of history"
  ],
  answer: "He is overwhelmed by memories of the Heritage Slave Museum",
  explanation: "Mr Bepo’s cry of 'Noooo!' was an emotional outburst triggered by the students’ reenactment of scenes that reminded him of the suffering of slaves he had seen at the museum.",
  reference: "The performance mirrored the painful images he saw at the Heritage Museum, bringing him to tears during the farewell event."
},
{
  question: "From the novel *The Lekki Headmaster*, what was the farewell gift presented to Mr Bepo?",
  options: [
    "A framed picture of the staff and students",
    "A plaque commemorating his years of service",
    "A cheque for $10,000",
    "A plane ticket to his new destination"
  ],
  answer: "A plaque commemorating his years of service",
  explanation: "In appreciation of his dedication, the school presented Mr Bepo with a commemorative plaque recognizing his years of leadership.",
  reference: "During the farewell celebration, he was honoured with a plaque as a symbol of gratitude for his service."
},
{
  question: "From the novel *The Lekki Headmaster*, at what time is Mr Bepo’s flight to the UK scheduled to depart?",
  options: ["5:00 pm", "10:00 pm", "1:00 pm", "8:00 pm"],
  answer: "10:00 pm",
  explanation: "Mr Bepo’s flight was scheduled for 10:00 p.m., allowing him to attend his farewell ceremony before heading to the airport.",
  reference: "He was reminded several times during the event that his flight was fixed for 10 p.m."
},
{
  question: "From the novel *The Lekki Headmaster*, who offers to drive Mr Bepo to the airport?",
  options: [
    "Mrs Grace Apeh",
    "Mr Oyelana",
    "Mr Ogunwale",
    "The Stardom accountant"
  ],
  answer: "Mr Oyelana",
  explanation: "Mr Oyelana, one of the senior teachers, volunteered to drive Mr Bepo to the airport after the farewell event.",
  reference: "At the close of the ceremony, Mr Oyelana offered to take him to the airport safely."
},
{
  question: "From the novel *The Lekki Headmaster*, what did Mr Bepo’s wife insist he should pack for his trip to the UK?",
  options: [
    "Locust beans, egusi, ground crayfish and dry snail",
    "New clothes and electronics",
    "Fruits and water",
    "His passport and essential documents"
  ],
  answer: "Locust beans, egusi, ground crayfish and dry snail",
  explanation: "His wife made sure he packed traditional Nigerian food ingredients to remind him of home while abroad.",
  reference: "She insisted he take items like locust beans, egusi, crayfish and dry snail along to the UK."
},
{
  question: "From the novel *The Lekki Headmaster*, what is the primary setting of the story?",
  options: [
    "Beesway Group of School",
    "Stardom Schools",
    "The Black Heritage Museum, Badagry",
    "Mushin, Lagos"
  ],
  answer: "Stardom Schools",
  explanation: "Most of the novel’s events occur in and around Stardom Schools, where Mr Bepo serves as principal.",
  reference: "The narrative largely unfolds in Stardom Schools, the central environment of Mr Bepo’s career."
},
{
  question: "From the novel *The Lekki Headmaster*, who is the protagonist of the novel?",
  options: [
    "Mr Alabi",
    "Mrs Grace Apeh",
    "Mrs Ibidun Gloss",
    "Mr Adewale Adebepo"
  ],
  answer: "Mr Adewale Adebepo",
  explanation: "Mr Adewale Adebepo, also known as 'The Lekki Headmaster,' is the main character and moral center of the story.",
  reference: "He is consistently referred to by both colleagues and students as 'The Lekki Headmaster.'"
},
{
  question: "From the novel *The Lekki Headmaster*, what is Mr Bepo’s profession?",
  options: [
    "A doctor",
    "A principal",
    "A businessman",
    "A historian"
  ],
  answer: "A principal",
  explanation: "Mr Bepo is the head of Stardom Schools, serving as the school’s principal and moral guide.",
  reference: "The story introduces him as the principal known for discipline and integrity."
},
{
  question: "From the novel *The Lekki Headmaster*, what is the main challenge that Mr Bepo faces in the novel?",
  options: [
    "Convincing parents to enrol their children",
    "Managing the school’s finances",
    "Balancing his career with pressure to migrate",
    "Starting his own school"
  ],
  answer: "Balancing his career with pressure to migrate",
  explanation: "Mr Bepo struggles to reconcile his loyalty to his job in Nigeria with societal and family pressure to relocate abroad.",
  reference: "Throughout the novel, he weighs the idea of relocation against his sense of duty and purpose at home."
},
{
  question: "From the novel *The Lekki Headmaster*, what theme is predominantly explored?",
  options: [
    "Betrayal",
    "Political corruption",
    "Love and relationships",
    "Migration and identity"
  ],
  answer: "Migration and identity",
  explanation: "The central theme explores how Nigerians pursue opportunities abroad while grappling with national identity and purpose.",
  reference: "The novel repeatedly highlights the emotional and cultural tension between staying home and relocating abroad."
}
];



