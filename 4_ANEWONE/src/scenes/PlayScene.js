import Phaser from 'phaser';
import { PLAYER_VELOCITY } from '../constants';

export default class PlayScene extends Phaser.Scene {
  constructor() {
    super({ key: 'play' });
  }

  create() {
    const tilesetData = [
      '.',
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
    ];

    const layersConfig = [
      {
        name: 'ground',
        collisionIndexes: [11],
        data: [
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 11, 11, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 11, 11, 11, 11, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 11, 11, 11, 11, 11, 11, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11],
        ]
      },
      {
        name: 'background',
        scrollFactor: 0.75,
        data: [
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ]
      }
    ];

    // Get level map
    // Generate tileset texture
    this.textures.generate('tileset', { data: tilesetData, pixelWidth: 16, pixelHeight: 16 });

    // Create an empty tilemap
    const map = this.make.tilemap({ tileWidth: 16, tileHeight: 16, width: 32, height: 22 });
    const tiles = map.addTilesetImage('tileset');

    // loop through each layer config,
    // parse the 2D arrays manually,
    // ('Parse2DArray' takes input for MapData and returns a MapData instance),
    // make use of the one LayerData instance stored in the returned MapData instance,
    // set the LayerData name
    // push the LayerData instance to our existing tilemap,
    // create the layer and set tileset index '11' ('A') to register collisions
    layersConfig.forEach(({
      name,
      data,
      collisionIndexes = [],
      scrollFactor = 1
    }) => {
      const tempMapName = null;
      const tempMapInsertNull = false;
      const tempMapData = Phaser.Tilemaps.Parsers.Parse2DArray(
        tempMapName,
        data,
        map.tileWidth,
        map.tileHeight,
        tempMapInsertNull
      );
      const layerData = tempMapData.layers[0];

      layerData.name = name;
      map.layers.push(layerData);

      map.createLayer(name, tiles, -this.game.config.width / 2, 0)
        .setCollision(collisionIndexes)
        .setScrollFactor(scrollFactor);
    });

    // Vehicles
    const redVehicleData = [
      '.....3.......',
      '....333......',
      '..5333445....',
      '.333333233...',
      '33333333333..',
      '37773337773..',
      '38587778583..',
      '38588888583..',
      '37888888873..',
      '.333333333...',
      '...6555....F.',
      '..6.7576.43E3',
      '..5.666.55.E.',
      '..5.777......',
      '....7..6.....',
      '....7..7.....'
    ];
    this.textures.generate('redVehicle', { data: redVehicleData, pixelWidth: 3, pixelHeight: 3 });

    const greenVehicleData = [
      '....DDDDDDDD....',
      '...DDEEDDDDDD...',
      '..DDDEEDDDDDDD..',
      '..DDDDDDDDDDDD..',
      '..DDDD5555DDDD..',
      '..DDD555555DDD..',
      '..DDD555555DDD..',
      '..DDD555555DDD..',
      '..334244333333..',
      '.33344443333333.',
      '3333444433333333',
      '....5...5..5....',
      '...5....5...5...',
      '.66....66....66.',
      '.66....66....66.'
    ];
    this.textures.generate('greenVehicle', { data: greenVehicleData, pixelWidth: 3, pixelHeight: 3 });

    const yellowVehicleData = [
      '.....DEEEEEED...',
      '.....EEEEEFFE...',
      '.....EEEDDFFE...',
      '334..EEDDDDEE...',
      '3333.EEDDDDEE...',
      '33333EEDDDDEE...',
      '.FF2222222222F..',
      '.F222222222222F.',
      '.22222222222222F',
      '4443322222222222',
      '44433FFFFFFFFFFF',
      '.111FFFFFFFFFFF.',
      '.11FFFFFFFFFFF..',
      '.1FFFFFFFFFF1...',
      '...3333.........',
      '...333..........'
    ];
    this.textures.generate('yellowVehicle', { data: yellowVehicleData, pixelWidth: 3, pixelHeight: 3 });

    const vehicleConfig = [
      { color: '0xff0000', x: 8, y: 16, name: 'red', textureName: 'redVehicle' },
      { color: '0xffff00', x: 40, y: this.game.config.height / 2 - 8, name: 'yellow', textureName: 'yellowVehicle' },
      //{ color: '0x0000ff', x: 72, y: this.game.config.height - 64, name: 'blue', textureName: 'redVehicle' },
      //{ color: '0xff6600', x: this.game.config.width - 128, y: 16, name: 'orange', textureName: 'orangeVehicle' },
      { color: '0x00ff00', x: this.game.config.width - 64, y: this.game.config.height / 2 - 8, name: 'green', textureName: 'greenVehicle' },
      //{ color: '0x6600ff', x: this.game.config.width - 96, y: this.game.config.height - 64, name: 'purple', textureName: 'redVehicle' },
    ];

    const vehicles = this.physics.add.group();

    for (let index = 0; index < vehicleConfig.length; index++) {
      const { color, x, y, name, textureName } = vehicleConfig[index];
      let vehicle;
      if (textureName) {
        vehicle = this.add.image(x, y, textureName)
      } else {
        vehicle = this.add.rectangle(x, y, 24, 24, color)
      }
      vehicle.setOrigin(0, 0).setName(name);
      vehicles.add(vehicle);
    }

    this.vehicles = vehicles;

    // Ammo
    // const ammoDefault = this.textures.createCanvas('ammo-default', 8, 8);
    // ammoDefault.context.fillStyle = '#ffffff';
    // ammoDefault.context.fillRect(0, 0, 8, 8);
    // ammoDefault.refresh();
    // this.ammoDefault = this.physics.add.group({
    //   maxSize: 30,
    // });

    // Player
    // const playerRectangle = this.add.rectangle(this.game.config.width / 2 - 8, this.game.config.height / 2 - 8, 16, 16, "0xffffff")
    this.player = this.physics.add.sprite(this.game.config.width / 2, this.game.config.height / 2, 'player')
      .setOrigin(0)
      .setName('player')
      .setDepth(this.vehicles.children.size);
    //this.player = this.physics.add.existing(playerRectangle);
    this.player.direction = 'right';

    // Camera follow player
    this.cameras.main.startFollow(this.player, false, 0.0625, 0.0625, 0, 60);
    //this.cameras.main.zoomTo(0.75);

    // Player animations
    this.anims.create({
      key: 'turn',
      frames: [{ key: 'player', frame: 0 }],
    });
    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('player', { start: 1, end: 6 }),
      frameRate: 6,
      repeat: -1
    });
    this.anims.create({
      key: 'rightJump',
      frames: [{ key: 'player', frame: 1 }],
    });

    // Initialize active objects
    this.activeObjects = this.physics.add.group();

    // Controls
    this.cursors = this.input.keyboard.createCursorKeys();
    this.cursors.space.on('down', spaceKeyDown, this);
    this.cursors.shift.on('down', shiftKeyDown, this);
    this.cursors.up.on('down', upKeyDown, this);
    //this.cursors.down.on('down', downKeyDown, this);
    this.cursors.left.on('down', leftKeyDown, this);
    this.cursors.right.on('down', rightKeyDown, this);

    // collision detection
    this.physics.add.collider([this.player, this.vehicles], map.getLayer('ground').tilemapLayer);
  }

  update(time, delta) {
    const { up, right, down, left, space, shift } = this.cursors;
    const velocity = getVelocity.call(this);
    const isGround =
      this.player.body.touching.down || this.player.body.blocked.down;
    const canJump = (this.time.now - this.player.jumpTimeStamp) < 500; // milliseconds

    // Stop non-active vehicles
    this.vehicles.children.each(vehicle => {
      if (vehicle.body.velocity.x > 0) {
        vehicle.body.setVelocityX(vehicle.body.velocity.x - 2);
      } else if (vehicle.body.velocity.x < 0) {
        vehicle.body.setVelocityX(vehicle.body.velocity.x + 2);
      }
    });

    // Ammo
    // this.ammoDefault.children.each(ammo => {
    //   if (ammo.active) {
    //     if (ammo.lifespan > 0) {
    //       ammo.lifespan -= delta;
    //     } else {
    //       ammo.setActive(false);
    //       ammo.setVisible(false);
    //       ammo.setVelocity(0);
    //     }
    //   }
    // });

    // Player move left, move right and idle
    if ((right.isDown || left.isDown) && (isGround))
      this.player.anims.play("right", true);
    else if (!isGround)
      this.player.anims.play("rightJump", true);
    else this.player.anims.play("turn", true);

    // Move player
    if (this.activeObjects.countActive()) {
      const firstObject = this.activeObjects.getFirst(true);
      const lastObject = this.activeObjects.getLast(true);

      // Only move the last object, which is the foundation of the mech.
      if (canJump || !lastObject.body.allowGravity) {
        if (up.isDown) {
          lastObject.body.setVelocityY(-velocity);
        } else if (down.isDown) {
          lastObject.body.setVelocityY(velocity);
        } else {
          if (!lastObject.body.allowGravity) {
            lastObject.body.setVelocityY(0);
          }
        }
      }

      if (left.isDown) {
        lastObject.body.setVelocityX(-velocity);
        lastObject.setFlipX(true);
        this.player.setFlipX(true);
      } else if (right.isDown) {
        lastObject.body.setVelocityX(velocity);
        lastObject.setFlipX(false);
        this.player.setFlipX(false);
      } else {
        lastObject.body.setVelocityX(0);
      }

      // Loop through the active objects in reverse order,
      // skipping the last object, and stack them vertically.
      this.activeObjects.children.each((vehicle, index) => {
        if (index != 0) {
          const inversePosition = this.activeObjects.children.size - index;
          const previousInversePosition = inversePosition + 1;
          const inverseVehicle = this.activeObjects.getFirstNth(inversePosition, true);
          const previousInverseVehicle = this.activeObjects.getFirstNth(previousInversePosition, true);

          inverseVehicle.body.x = previousInverseVehicle.body.x;
          inverseVehicle.body.y = previousInverseVehicle.body.y - 8;
        }
      });

      // Stack the player on top of the first object.
      if (firstObject) {
        this.player.body.x = firstObject.body.x - 4;
        this.player.body.y = firstObject.body.y - 8;
      }
    } else {
      // Just the player is active, so only move the player.
      if (canJump) {
        if (up.isDown) {
          this.player.body.setVelocityY(-velocity);
        } else if (down.isDown) {
          this.player.body.setVelocityY(velocity);
        }
      }

      if (left.isDown) {
        this.player.body.setVelocityX(-velocity);
        this.player.setFlipX(true);
      } else if (right.isDown) {
        this.player.body.setVelocityX(velocity);
        this.player.setFlipX(false);
      } else {
        this.player.body.setVelocityX(0);
      }
    }

    // Update vehicle positions
    // let previous;
    // this.activeObjects.children.intersect(this.vehicles.children).each((vehicle, index) => {
    //   const dx = (previous ? previous.x : this.player.x) - vehicle.x;
    //   const dy = (previous ? previous.y : this.player.y) - vehicle.y;
    //   const vx = dx * 4;
    //   const vy = dy * 4;
    //   if (up.isDown) {
    //     vehicle.body.setVelocity(vx, vy);
    //   } else {
    //     vehicle.body.setVelocityX(vx)
    //   }
    //   previous = vehicle;
    // });
  }
}

// Helpers

function getVelocity() {
  if (this.activeObjects.children.get('name', 'red')) {
    return PLAYER_VELOCITY * 2;
  }
  return PLAYER_VELOCITY;
}

// function fireAmmo() {
//   const { up, right, down, left } = this.cursors;
//   const facing = this.player.direction;
//   const ammoVelocity = 400;
//   let ammo;

//   ammo = this.ammoDefault.get(this.player.x + 16, this.player.y + 16, 'ammo-default');
//   if (ammo) {
//     ammo.setActive(true);
//     ammo.setVisible(true);
//     ammo.lifespan = 1000;
//     if (right.isDown || left.isDown) {
//       ammo.body.setVelocityX(left.isDown ? -ammoVelocity : ammoVelocity);
//     } else {
//       ammo.body.setVelocityX(facing == 'left' ? -ammoVelocity : ammoVelocity);
//     }
//     ammo.body.setAllowGravity(false);
//   }
// }

function spaceKeyDown() {
  // fireAmmo.call(this);
}

function shiftKeyDown() {
  let activeObject = this.activeObjects.getLast(true) || this.player;
  let isEnteringVehicle = false;

  // For each vehicle on the map...
  this.vehicles.children.each(vehicle => {
    // Check if the player overlaps a vehicle.
    if (this.physics.world.intersects(activeObject.body, vehicle.body)) {
      // If so, attach player to vehicle, otherwise detach player from vehicle.
      if (!this.activeObjects.contains(vehicle)) {
        const index = this.activeObjects.children.size;
        const depth = index + 1;

        isEnteringVehicle = true;

        this.activeObjects
          .children.each(object => {
            object.body.setAllowGravity(false);
          });

        this.activeObjects.add(vehicle);
        this.player.setDepth(0);
        this.player.body.setAllowGravity(false);
        vehicle.setDepth(depth);

        if (vehicle.name == 'yellow' || vehicle.name == 'green') {
          vehicle.body.setAllowGravity(false);
          this.cameras.main.setFollowOffset(0, 0);
        } else if (vehicle.name == 'red') {
          this.cameras.main.setFollowOffset(0, 30);
        }
      }
    }
  });

  // Exiting a vehicle, get ready to disperse vehicles.
  if (!isEnteringVehicle) {
    const position = this.player.x + (this.player.width / 2) - (this.activeObjects.children.size * 24 / 2);
    this.activeObjects
      .setDepth(0)
      .setX(position, 24)
      .children.each(object => {
        object.body.setAllowGravity(true);
      });
    this.activeObjects.clear();
    this.player.setDepth(this.vehicles.children.size);
    this.player.body.setAllowGravity(true);
    this.cameras.main.setFollowOffset(0, 60);
  }
}

function upKeyDown() {
  //this.player.direction = 'up';
  let isGround;

  if (this.activeObjects.countActive()) {
    const lastObject = this.activeObjects.getLast(true);
    isGround =
      lastObject.body.touching.down || lastObject.body.blocked.down;
  } else {
    isGround =
      this.player.body.touching.down || this.player.body.blocked.down;
  }

  if (isGround && (!this.player.jumpTimeStamp || this.time.now - this.player.jumpTimeStamp >= 500)) {
    this.player.jumpTimeStamp = this.time.now;
  }
}

// function downKeyDown() {
//   this.player.direction = 'down';
// }

function leftKeyDown() {
  this.player.direction = 'left';
}

function rightKeyDown() {
  this.player.direction = 'right';
}
