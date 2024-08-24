import React from 'react';
import './InfinityCards.css';

const InfinityCard = () => {
  const animals = [
    {
      name: 'Dolphin',
      facts: 'Dolphins are highly intelligent marine mammals known for their playful behavior and complex communication.',
      image: 'https://images.unsplash.com/photo-1607153333879-c174d265f1d2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Jellyfish',
      facts: 'Jellyfish have existed for over 500 million years and can glow in the dark due to bioluminescence.',
      image: 'https://images.unsplash.com/photo-1547103106-9a0e718bb2d2?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Clownfish',
      facts: 'Clownfish are known for their bright orange color and their symbiotic relationship with sea anemones.',
      image: 'https://images.unsplash.com/photo-1596414086775-3e321ab08f36?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Great White Shark',
      facts: 'Great White Sharks are one of the ocean’s top predators, known for their size and powerful jaws.',
      image: 'https://images.unsplash.com/photo-1637380781238-9b703b0d2db0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Sea Turtle',
      facts: 'Sea Turtles have been around for over 100 million years, and they travel long distances between feeding grounds and nesting sites.',
      image: 'https://images.unsplash.com/photo-1577457674844-da86606d2de6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Octopus',
      facts: 'Octopuses are known for their intelligence, ability to camouflage, and eight flexible arms.',
      image: 'https://images.unsplash.com/photo-1545671913-b89ac1b4ac10?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Stingray',
      facts: 'Stingrays are closely related to sharks and are known for their flat bodies and long tails equipped with a stinger.',
      image: 'https://images.unsplash.com/photo-1686592791269-733beb4eb348?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Whale',
      facts: 'Whales are the largest animals on Earth, known for their immense size and powerful songs.',
      image: 'https://images.unsplash.com/photo-1568430462989-44163eb1752f?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Sea Horse',
      facts: 'Sea Horses are unique marine creatures known for their horse-like head and prehensile tail.',
      image: 'https://images.unsplash.com/photo-1515309025403-4b0184873cef?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Starfish',
      facts: 'Starfish are echinoderms known for their star-shaped body and the ability to regenerate lost arms.',
      image: 'https://images.unsplash.com/photo-1534829942-6f3792b99514?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  return (
    <div className="bgColour">
      <div className="card-container">
        <div className="infinite-wrapper">
          {[...animals, ...animals, ...animals].map((animal, index) => (
            <div className="infinity-card" key={index}>
              <img src={animal.image} alt={animal.name} className="animal-image" />
              <div className="card-content">
                <h3 className="animal-name">{animal.name}</h3>
                <p className="animal-facts">{animal.facts}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfinityCard;
