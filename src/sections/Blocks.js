import React from "react";
// import blockImg from "../img/yuri-shirota-p0hDztR46cw-unsplash.jpg";
import nonToxic from "../img/bb-netoxicke-blob.webp";
import easyClean from "../img/bb-udrzba.webp";
import doubleSide from "../img/bb-double-side.webp";

const Blocks = () => {
  return (
    <div id="blocks" className="section-blocks">
      <div className="two-blocks">
        <div className="block-area-img">
          <img className="block-img" src={nonToxic} alt="Bunny & Bro netoxické dětské hrací podložky." />
        </div>
        <div className="block-area-text border-right">
          <h3 className="heading-tertiary">Netoxický a ultralehký materiál, který oceníte</h3>
          <blockquote className="block-text italic">
            Naše hrací podložky Bunny & Bro jsou vyrobeny z materiálu XPE (pěnový polyethylen), který je netoxický, měkký, pružný, odolný a zcela bez zápachu. Podložky jsou ultra lehké, takže manipulaci s nimi zvládne hravě opravdu každý.
          </blockquote>
        </div>
      </div>

      <div className="two-blocks">
        <div className="block-area-text border-left">
          <h3 className="heading-tertiary">
            Snadná údržba jako velké plus
          </h3>
          <blockquote className="block-text italic">
            Rozlité mléko, džus nebo voda Vám už vrásky dělat nemusí. Hrací podložky Bunny & Bro se snadno čistí a udržují a mohou tak posloužit i jako místo pro hravou svačinku.
          </blockquote>
        </div>
        <div className="block-area-img">
          <img className="block-img" src={easyClean} alt="Bunny & Bro snadno čistitelné dětské hrací podložky." />
        </div>
      </div>

      <div className="two-blocks">
        <div className="block-area-img">
          <img className="block-img" src={doubleSide} alt="Bunny & Bro designové, oboustranné dětské hrací podložky." />
        </div>
        <div className="block-area-text border-right">
          <h3 className="heading-tertiary">Jedna podložka, dva designy</h3>
          <blockquote className="block-text italic">
            Oboustranný design našich podložek určitě oceníte! Pokud Vás jeden design omrzí, stačí podložku otočit a můžete se těšit z designu druhého. Navíc podložky krásně izolují, takže studené zimní podlahy Vás a Vaše děti od hry na zemi neodradí.
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Blocks;
