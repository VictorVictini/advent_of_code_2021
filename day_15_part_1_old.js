// write non-recursive while-loop Dikjstra's Algorithm

const input = `7123177913871491389589264788547148381988811673752241637816163827448692499239515115894381588375396471
9738878597866183278612514475755598861117949965829826949819696599841511616198177483157219211238226665
2728314738118818417596585299898141515484167717378811771172771455459817575879182681543225671796579564
3698237941798921857499612323641798179312519816114669628793538557419995793394792976116175183983211218
8931299558895122919849817111991912299694619511272212888417418196496976619283339474157935296969177921
4876399196561616888211818411392552865916811686918294139639998168582233818894993882378164973177419292
1292826913925292993394627812472966298114458928424398988196171891981314199973375171711499591999295722
2612819791685974812429441111697818261281422279834379563115293558312533728942295586148171358952659947
6638822314594315236886818282759119972499915998333742951291758918511191291981139924297194471198819992
3212921351399439782291441141194213794861268171719226573929478185198972881798292879922296597111267985
9694955531925421216621667171387812673256762869119116982546712788121611188865459428311479913923252812
8993899649958218893492947198596622311414594129991613199694121881963973616778199437361417251114898896
2932137594986313811563891831516429822264187117794718732832322275923584989344938612756788851319215445
9923942842169247311971329991517267154685897333913756132933889376946781927392178755261819729642288132
9142173591893199149829423314381331583328694313941266171113924219211681916313986812131311533142191693
5848192685188599944816146242793127138949121256118119414186816441591293151999119971396296221276131241
3495527991317138191168853316591298662515462388318695459314259431427199827112814475291998894533661719
6815167261798913879534189564249399392672145779914816489949341922439166128967131283857229364832939232
9715263568753956232885237118388651333374435831664275153715817339997179993814287431396622272616271133
1812949719568129216833815893498895318898151127318887918774267731151122617626267391916721894187735879
6194936292994131619884424828772115321296933111248146743138951133525259921388132674296978191595215421
8977231295463954488743917723843199269161928319992799113233196719627994185231913636481128347191888993
7191387136716153811135921391495919122211583111131242512186177359857642411281598176173477158148461742
8748994183994891161849125494181651122719172611112829351936539911981374881952184859949776981967135889
4818995199799799317796797181385776752888232638392141897612916871898458673919399565456391616359619722
2324149221529527952295121615332529396955513926313268682677391936267663467637119911666968839741927288
9387191819291784198317392415819191724129835871495311699431299514299912942877459422153796598154195936
3187152295157488239629224167299278792979374188163598271919325679669943944631641114319613632913941867
4187553758199893917166292177621116363872642297713977519579918916911132498628192671316693138923217738
7896983716218397299912126791897926852272193176651193815853749813676172192991933991241531915358592943
2348247919145847514999915288812971366894736367322416127123839211819819893938238144595466824813581688
6911579174885666196116496835334513924129158549472491355911727571419193999691849595418142654987162596
8233311258291312123922594216362361184417111671134933993719988681111993994811784424145912713728546148
1162139841389997711783335749151324349829189455223249558153435151167312198161429992286971283355217762
9499631991542729216797153991489111797686945155575494822971821485199834897292889255296899325832659372
9919722366494721121916812991347712311123354812314431341835584535911911183475929155451117133113518354
3299321782846455776178299242914282826128713775681296642569791332836884518333197171822922357552638257
4614911396711984669911199281145369229899421149212339819959928831788384791918432316191251591691214353
4369289134597955589999495348592539727279475199412997118117152888153787932811981712348789921597223884
1921278987992168289199159228511681682851987138959823165149863424871954671997219162181639788134671239
8539367723644163113958998812319181651829319522919271727372655732991298341353642799614887987116119991
9819237823912311318512271116896112568693473129616312762194271883382198451421259591659131149739567431
3913629226255984248923677172369227529268378689129311591493392989499398541156998151934538421544988198
9874118273932233256784989122831831438444699999969125597386734339278292411842292935966924611973117536
3297942819139177814771683635499686478938123535294382195953689425918122743452127119188392213214162719
6428369731511597131697241921814427613712519849617997822241919837334471918169985497447845215111571111
4717882166389311599121985911815127671481262152181961791322981241713128381283932879815396748715326116
9446657145378538332649933726924339585982712752416989637831889841999171924591539949915281695348616119
1542914874298812536216998196883784913621263443517371816311128619246117922299562938819614239587919693
1445469798118719191614518343323122521442292174917967445253456563977662989479257751894581593719739991
7772142417741935423174485817123889139399291273428692734431984124117191994123498115727598161392677699
6988945923714311219114921397868498885113257552168928846919896189191694261437512499791222278916169288
7851211433643663591554743152113696322971779195631762592311915771859233266466849696548914971193499364
4919396661388921921994122948951598619526848887659791912391223398827566916838432249598749774916496711
1196599655895393416289389977637236641318279616416994991439226589111757355629849933169854118249997919
5114211499998844843174919884423467219162277687929161558775139511929631962658267678221272328914953732
8216171512426485781351969231952198433381329983288317413326512138574464114453937223541765367971856788
2213177288792193388519618281868911182281428936911325912397967192287711833111797518143218673821192899
2784153192416189911216612291791983219622166389621996117219781639919612667199999129821528411964639199
4187898219537683365988849129793392557283572786889441274612197286178112735995692535456157587812218711
3289961986387137451576181267292891928699191488241997579896141161217814198431161774438724446513817347
1579149591461935819116247565121622891413133538179461264778198149199793117163932219237419521332475723
8511871311713679914269882644473751984369996191729198493285714245762879942883717594273668937984612859
1299519281323389918993242297332143893749252414799491177636152119414457637112995194255822953441323767
5956297531138129799432717521922827212567131222732852611291511239992997934392819583522981699162914417
9941713968132521114282728119911171371767252117572477196141318371891319144171114944838884899991129662
3289334178322912999218672177961313951181389283788115263914991671385991338168197891735411426621896437
3517399198911891116419161659893219997361251111462415147245636698911119144122948941611999537914127921
7391621997684963324417791261394821117179111599877845791691691999758491717192891377392662426922381649
9539641387391158465314288999171521516996119112739729425799782424458612492799866313395268329813142998
7159761151187488213272297981256985319892792222143284319128613282931987743335641992228248391313519531
3138612956672911883119197936151783665186495653914713496188952389722272421535138125838382521963591562
2722391699271222281179116691629372616974311231381924211686611666919731221727399213415714891415614991
7198919263899918891485598237399963318129522299496599371183799311118199698219813639932192422592379521
7368622164517278632222981928929692926994317935549341915121242459537164841789531795135523197651979291
1926148892518314965269213317792781877993491381788416765975716755185279549699712281281784581861751169
9249985391769615964945784311129911697198267954993689957729719133276621353583195921579141925315925166
6822113216689392191133553173276588849489996679488414961829594191993816192923712718939527186629116941
5929189959684777622871367188254399766777395794834448572421243984636768429891326273999953635499781823
3968641911437319438596991911526912992916952278875428199179942114261598893262717938299221167273799979
3581738249268299998729188711271131183463978189544984397511934495858934421812219983183226727177137114
1631458422911129912835999399394913599312249165919497857822112997138599391899427114543933588882749375
7751959887233838373994262343677972499854568863234916814662714417494468417237214895924711139913939931
4591349111791721157991319331898365223999499119349939111219419624872719169431985811875181468395293861
9792291732129325192193663689331995249571212989662591947284119882841111636726819362215311819211795897
1488399771452298411953629967461723138977649994883655382185266168282297595892929374412297962677511168
7924861111421119789911192623416874981293118241238722492254626547593951768791776297212239248219618114
8735129436119198495916414425995513415961489114319948429491748935119857139517121738987938966891125783
9669648319182921264115692232751318121116373481894266491823915963139471491859149397216775362939414969
9956144986618983299822988922918999922211819753624127131799113139524343936443128596821789648269963896
7991139371219143999647978711473188557939866849119391117191869921928812871649882975753469934691399149
5512138553215161592622431858481393373361674599955358483792512195323411931199662281891856487591112893
9417295659949511519279658459111995961867134373999356883483499622281215996711111747445985881745648997
5869918917951981844765591591191412765331147258751421475964719757299891817418117775918693188123993417
1624257425257726748957618898694796968997367176999981891437592613316142593927894818699625341211118521
2691266599149129279888396797262149311989598668888453732682612511116669997393343711966114278812466911
3871919914394816781582584188751221559169429281577559622382565992458117893269798921374515671374711269
2937696914977492589611351118178169911891394771517293921914627713178322419232244298725129511451733882
8914885347357182842138897239419948884639745551712216898133998524382831475347911516291799198921935134
5527717416681927222852118761365169418317189819727214551585891949313611155917969911112533919284572421`;

// formatting input
let riskLevels = [];
input.split("\n").forEach(line => {
    const tempLine = [];
    line.split("").forEach(num => tempLine.push(parseInt(num)));
    riskLevels.push(tempLine);
});

function findKnownCost(x, y) {
    let found = known.filter(data => data.x == x && data.y == y);
    if (!found[0]) return 999999;
    return found[0].cost;
}

function findIndex(x, y) {
    let found = known.findIndex(data => data.x == x && data.y == y);
    if (found == -1) {
        known.push({
            x: x,
            y: y,
            cost: 0
        });
        return known.length - 1;
    }
    return found;
}

// recursion again, yay
async function path(x, y, cost) {
    cost += riskLevels[y][x];
    if (findKnownCost(x, y) <= cost) return;
    known[findIndex(x, y)] = {
        x: x,
        y: y,
        cost: cost
    };
    if (x > 0) await path(x - 1, y, cost);
    if (y > 0) await path(x, y - 1, cost);
    if (x < (riskLevels[0].length - 1)) await path(x + 1, y, cost);
    if (y < (riskLevels.length - 1)) await path(x, y + 1, cost);
}


let known = [];
async function idk() {
    await path(0, 0, 0, riskLevels[0].length - 1, riskLevels.length - 1);
    console.log(known[findIndex(riskLevels[0].length - 1, riskLevels.length - 1)].cost - riskLevels[0][0]);
}
idk();