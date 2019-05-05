## Inspiration

We wanted to create individual reflection on environment and water consumption by making a design that shows your consumption in a visible and tangible way in your daily life.

## What it does

Our design is a plant, but not just any plant. The design contains a beautiful pot, a storage unit for water, a pump to water the plant, a moisture-sensor and the identity, that is, the plant itself through an OLED-screen. We analyze data from water pumps in your home. If you consumes a sustainable amount of water your plant will be watered by the pump and storage unit. If the plant is watered the OLED(Shawn) shows a happy face.

If you over-consume water there will not be enough water for Shawn. Shawn will be dry and he will have a sad face. If this goes on for too long the plant will die which will be showed on the display.

## How we built it

We used a micro-controllers to control the water pump through a relay and to control the OLED screen. We have used Arduino to build the prototype of these functionalities. Besides the Arduino we have made a frontend application with ReasonML and React to log the data directly from the pump and translate into Shawn's watering state.

## Challenges we ran into

We had some challenges when it came to choosing the right language to code the frontend application in. We also had challenge parsing the JSON due to ReasonML being a strictly statically typed language.

When it came to the Arduino none of us had ever worked with the OLED screen or a waterpump or a relay system before. So we had to adapt to new opportunities and challenges and combine it all to one functional script.

The design-process was however the biggest challenge and where we spent a lot of time. We wanted to finde an idea and make something truely great and not just a display of your water-use. This took plenty of brainstorming sessions and almost half the hackathon. But it gaves a lot of insights and reflections that ended up in our final awesome design.

## Accomplishments that we're proud of

We made plant.

## What we learned

That design processes is important because the right idea creates the motivation to create under the kind of pressure that you do in AUHack

## What's next for Shawn the Plant

Polish and shipping. Get out and save humanity.



### Built With

- C
- Arduino
- ReasonML
- React

