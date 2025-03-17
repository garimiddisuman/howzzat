// implementation of cards
const cards = [
  {
    shot: 'Cover Drive',
    position: 'Cover',
    fielderPresent: { wicket: { outType: 'Caught' }, runsScored: 0 },
    fielderAbsent: { runsScored: 4 },
  },
  {
    shot: 'Pull Shot',
    position: 'Mid Wicket',
    fielderPresent: { wicket: { outType: 'Caught' }, runsScored: 0 },
    fielderAbsent: { runsScored: 6 },
  },
  {
    shot: 'Straight Drive',
    position: 'Mid On',
    fielderPresent: { runsScored: 1 },
    fielderAbsent: { runsScored: 4 },
  },
  {
    shot: 'Cut Shot',
    position: 'Point',
    fielderPresent: { wicket: { outType: 'Caught' }, runsScored: 0 },
    fielderAbsent: { runsScored: 4 },
  },
  {
    shot: 'Lofted Shot',
    position: 'Long Off',
    fielderPresent: { wicket: { outType: 'Caught' }, runsScored: 0 },
    fielderAbsent: { runsScored: 6 },
  },
  {
    shot: 'Glance',
    position: 'Fine Leg',
    fielderPresent: { runsScored: 1 },
    fielderAbsent: { runsScored: 4 },
  },
  {
    shot: 'Defensive Block',
    position: 'Silly Point',
    fielderPresent: { runsScored: 0 },
    fielderAbsent: { runsScored: 0 },
  },
  {
    shot: 'Sweep Shot',
    position: 'Square Leg',
    fielderPresent: { wicket: { outType: 'Caught' }, runsScored: 0 },
    fielderAbsent: { runsScored: 4 },
  },
  {
    shot: 'Upper Cut',
    position: 'Third Man',
    fielderPresent: { wicket: { outType: 'Caught' }, runsScored: 0 },
    fielderAbsent: { runsScored: 6 },
  },
  {
    shot: 'Helicopter Shot',
    position: 'Mid On',
    fielderPresent: { runsScored: 2 },
    fielderAbsent: { runsScored: 6 },
  },
];

const jsonData = JSON.stringify(cards);
const filePath = '../data/cards.json';

try {
  await Deno.writeTextFile(filePath, jsonData);
  console.log(`Data has been successfully written to ${filePath}`);
} catch (error) {
  console.error('Error writing to file:', error);
}
