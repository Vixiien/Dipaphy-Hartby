import React, { useState } from 'react';
import '../envelope/envelope.css';

const Envelope = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className={`envelope ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
      <div className='front-flap flap'></div>
      <div className='front-pocket pocket'></div>
      <div className='letter justified'>
        <h1>
          Again, happy happy 18th birthday sa’yo, Scent!
          Kanina, wala talaga akong maisip na sasabihin sa’yo dahil nahihiya ako alam mo yan. Hindi rin ako makapaniwala na 18 ka na, AHAHAH, kasi para sa’kin, ikaw pa rin yung batang Scent na nakilala ko noon. Kaya nga lagi kitang ini-spoil eh. Ang bilis talaga ng panahon. Dati, ikaw pa yung pinagsasabihan ko na bawal sa’yo ang ganito at ganyan dahil bata ka pa, pero ngayon, hindi na kita masasabihan ng gano’n dahil legal age ka na. Pwede mo nang gawin lahat ng gusto mo pero gaya nga ng sabi nila sa’yo, know your limits pa rin ah.

          Salamat din dahil naging magkaibigan pa rin tayo kahit medyo nagfa-fade na ang closeness natin dahil busy na tayo sa kanya-kanya nating buhay. Akala ko, hindi mo na ako papansinin, pero nandiyan ka pa rin. Masaya ako na nag-stay ka sa’kin as a friend kahit na tadtad tayo ng issue HAHA. Dedma na lang tayo sa mga gano’n.

          Thank you din sa pagpapatawa sa’kin sa mga panahong lugmok na lugmok na ako. Hindi lang halata at hindi ko lang sinasabi sa’yo kasi ayoko nang makadagdag pa sa iniisip mo, lalo na nakikita kong mas stressed ka pa sa’kin. Always kong chine-cherish lahat ng bonding natin, hindi ko yun makakalimutan dahil napaka-special nun para sa’kin, walang halong bola, HAHA.

          Wish ko lang sa’yo, Always be strong kahit ano’ng mangyari sa buhay mo, okay? Alam mo naman na mahirap ang stage ng pagiging adult pero masaya pa rin siya, kaya i-enjoy mo lang every moment ng buhay mo. Sana magtagal pa kayo ng baby Martin mo dahil nakikita ko na masaya ka sa kanya at ganon din siya sa’yo
          kaya kung mag aaway man kayo, pakalmahin niyo muna ang isa't isa at pag usapan niyo ng ayos
          kung ano man ang pinag awayan niyo, wag kayong papadala sa emosyon niyo dahil isang maling desisyon niyo lang ay pagsisisihan niyo ng todo yun. Always lang akong nandito, wag kang mahihiyang i-reach out ako.

          Sana magustuhan mo yung gift ko sa’yo (CLN BAG). Hindi ko na nilagyan ng name kasi tinatamad ako HEHE.</h1>
      </div>
    </div>
  );
};

export default Envelope;
