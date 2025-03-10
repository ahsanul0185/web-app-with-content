import React from 'react'
import logo_dark from "../assets/logo-dark.svg"
import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {
  return (
    <div>

        {/* Privacy Header */}
        <div className='fixed w-full top-0 left-0 gradient-bg-light backdrop-blur-xl py-3 md:py-4 section-padding'>
            <Link to="/">
            <img className="w-14 sm:w-16 md:w-20 cursor-pointer" src={logo_dark} alt="edai" /></Link>
        </div>

        <div className='section-padding text-black mt-6 md:mt-20 py-14 privacy-policy'>
            <h2 className='text-xl md:text-2xl font-extrabold uppercase'>
            TIETOSUOJASELOSTE
            </h2>

            <p className='my-2 md:my-4 text-sm sm:text-base'>Viimeksi päivitetty: 05 / 03 / 2025</p>

            <h3>1. Rekisterinpitäjä</h3>
            <p>EDAI.com / edai@gmai.com</p>

            <h3>2. Mitä tietoja keräämme? </h3>
            <p>Keräämme verkkosivustomme käyttäjistä seuraavia tietoja: </p>
            <p>Käyttäytymistiedot (esim. sivulataukset, klikkaukset, vierailun kesto)</p>
            <p>Analytiikkatiedot (esim. Google Analyticsin anonymisoidut tiedot)</p>
            <p>Emme kerää käyttäjien henkilökohtaisia tietoja, kuten nimiä, sähköpostiosoitteita tai IP-osoitteita.</p>

            <h3>3. Mihin tietoja käytetään?</h3>
            <p>Kerättyjä tietoja käytetään seuraaviin tarkoituksiin:</p>
            <p>Verkkosivuston toiminnan ja käyttökokemuksen parantaminen</p>
            <p>Käyttäjäliikenteen analysointi ja tilastointi</p>
            <p>Palvelun kehittäminen ja optimointi</p>

            <h3>4. Evästeet ja analytiikka</h3>
            <p>Käytämme verkkosivustollamme evästeitä käyttäjäkokemuksen parantamiseksi. Käytössämme olevat evästeet voivat sisältää:</p>
            <p>Välttämättömät evästeet (sivuston perustoiminnot)</p>
            <p>Analytiikkaevästeet (käyttäytymistiedon kerääminen ja analysointi)</p>
            <p>Käyttäjä voi hallita evästeitä selaimensa asetuksista tai hyväksymällä/hylkäämällä evästeet evästebannerista.</p>

            <h3>5. Tietojen säilyttäminen</h3>
            <p>Keräämämme tiedot säilytetään anonymisoituna ja niitä säilytetään vain niin kauan kuin on tarpeen verkkosivuston kehittämisen ja analysoinnin kannalta.</p>
            
            <h3>6. Käyttäjän oikeudet</h3>
            <p>Käyttäjällä on oikeus:</p>
            <p>Saada tietoa siitä, mitä tietoja kerätään</p>
            <p>Kieltää analytiikkaseuranta evästebannerin kautta</p>
            <p>Pyytää poistamaan mahdolliset tallennetut tiedot, jos ne eivät ole anonymisoituja</p>

            <h3>7. Yhteydenotto</h3>
            <p>Jos sinulla on kysyttävää tietosuojakäytännöistämme, voit ottaa yhteyttä sähköpostitse: edai@gmai.com</p>

        </div>

            <div className='gradient-bg-light'>
              <div className='h-[20vh] md:h-[30vh] container section-padding py-5 sm:py-8 flex flex-col justify-between'>
                  <div>
                      <img className='w-14 sm:w-16' src={logo_dark} alt="EDAI" />
                  </div>
            </div>
            </div>


    </div>
  )
}

export default PrivacyPolicy