import React from 'react';

export default function Display({ strikes, balls, hit, foul }) {
  return (
    <div>
      <h3>Strikes : {strikes}</h3>
      <h3>Balls : {balls}</h3>
      <h3>Hit : {hit}</h3>
      <h3>Foul : {foul}</h3>
    </div>
  )
}