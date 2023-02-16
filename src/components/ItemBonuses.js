import React from 'react';

import whiteDagger from './assets/White_Dagger.png'
import whiteScimitar from './assets/White_scimitar.png'
import whiteWarhammer from './assets/White_warhammer.png'
import magicIcon from './assets/Ranged_icon.png'
import rangedIcon from './assets/Magic_icon.png'
import magicDamage from './assets/Magic_Damage_icon.png'
import prayer from './assets/Prayer_icon.png'
import rangedStrength from './assets/Ranged_Strength_icon.png'
import strength from './assets/Strength_icon.png'
import slayer from './assets/Slayer_icon.png'

export default function ItemBonuses({
    attack_stab, attack_slash, attack_crush, attack_magic, attack_range, 
    defence_stab, defence_slash, defence_crush, defence_magic, defence_range, 
    other_melee_strength, other_ranged_strength, other_magic_damage, other_prayer, other_slayer
}) {
  return (
    <div>
    <h3>Attack Bonuses</h3>
    <table style={{
        textAlign: 'center'
    }}>
        <thead>
            <tr>
                <td><img src={whiteDagger} alt="White Dagger" /></td>
                <td><img src={whiteScimitar} alt="White Scimitar" /></td>
                <td><img src={whiteWarhammer} alt="White Warhammer" /></td>
                <td><img src={magicIcon} alt="Ranged Icon" /></td>
                <td><img src={rangedIcon} alt="Magic Icon" /></td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{attack_stab}</td>
                <td>{attack_slash}</td>
                <td>{attack_crush}</td>
                <td>{attack_magic}</td>
                <td>{attack_range}</td>
            </tr>
        </tbody>
    </table>
    <h3>Defence Bonuses</h3>
    <table style={{
        textAlign: 'center'
    }}>
        <thead>
            <tr>
                <td><img src={whiteDagger} alt="White Dagger" /></td>
                <td><img src={whiteScimitar} alt="White Scimitar" /></td>
                <td><img src={whiteWarhammer} alt="White Warhammer" /></td>
                <td><img src={magicIcon} alt="Ranged Icon" /></td>
                <td><img src={rangedIcon} alt="Magic Icon" /></td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{defence_stab}</td>
                <td>{defence_slash}</td>
                <td>{defence_crush}</td>
                <td>{defence_magic}</td>
                <td>{defence_range}</td>
            </tr>
        </tbody>
    </table>
    <h3>Other Bonuses</h3>
    <table style={{
        textAlign: 'center'
    }}>
        <thead>
            <tr>
                <td><img src={strength} alt="Strength Icon" /></td>
                <td><img src={rangedStrength} alt="Ranged Strength" /></td>
                <td><img src={magicDamage} alt="Magic damage" /></td>
                <td><img src={prayer} alt="Prayer Icon" /></td>
                <td><img src={slayer} alt="Slayer Icon" /></td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{other_melee_strength}</td>
                <td>{other_ranged_strength}</td>
                <td>{other_magic_damage}</td>
                <td>{other_prayer}</td>
                <td>{other_slayer}</td>
            </tr>
        </tbody>
    </table>
    </div>
  );
}