import * as assert from 'assert';
import { describe, it } from 'jsr:@std/testing/bdd';
import { Field, Scorecard } from '../src/field.js';
import allPositions from "../data/field-positions.json" with {type: "json"}

describe('Field', () => {
  it('should initialize with correct properties', () => {
    const field = new Field();
    assert.assertEquals(field.showAllFields, allPositions);
    assert.assertEquals([...field.showSelectedFields], []);
  });

  it('should add a valid fielder position', () => {
    const field = new Field();
    const position = Object.keys(allPositions)[0];
    const result = field.setMultipleFielders([position]);
    assert.assertEquals(result[position], true);
    assert.assertEquals(field.isFielderPresent(position), true);
  });

  it('should not add an invalid fielder position', () => {
    const field = new Field();
    const invalidPosition = 'invalid_position';
    const result = field.setMultipleFielders([invalidPosition]);
    assert.assertEquals(result[invalidPosition], false);
    assert.assertEquals(field.isFielderPresent(invalidPosition), false);
  });

  it('should not add more than 11 fielders', () => {
    const field = new Field();
    const positions = Object.keys(allPositions).slice(0, 12);
    const result = field.setMultipleFielders(positions);
    const addedFielders = Object.values(result).filter((res) => res === true).length;
    assert.assertEquals(addedFielders, 11);
  });

  it('should remove a valid fielder position', () => {
    const field = new Field();
    const position = Object.keys(allPositions)[0];
    field.setMultipleFielders([position]);
    const result = field.removeMultipleFielders([position]);
    assert.assertEquals(result[position], true);
    assert.assertEquals(field.isFielderPresent(position), false);
  });

  it('should not remove an invalid fielder position', () => {
    const field = new Field();
    const invalidPosition = 'invalid_position';
    const result = field.removeMultipleFielders([invalidPosition]);
    assert.assertEquals(result[invalidPosition], false);
  });

  it('should not remove a fielder that is not present', () => {
    const field = new Field();
    const position = Object.keys(allPositions)[0];
    const result = field.removeMultipleFielders([position]);
    assert.assertEquals(result[position], false);
  });

  it('should correctly handle adding and removing multiple fielders', () => {
    const field = new Field();
    const positions = Object.keys(allPositions).slice(0, 5);
    const addResult = field.setMultipleFielders(positions);
    positions.forEach((pos) => {
      assert.assertEquals(addResult[pos], true);
      assert.assertEquals(field.isFielderPresent(pos), true);
    });

    const removeResult = field.removeMultipleFielders(positions);
    positions.forEach((pos) => {
      assert.assertEquals(removeResult[pos], true);
      assert.assertEquals(field.isFielderPresent(pos), false);
    });
  });
});