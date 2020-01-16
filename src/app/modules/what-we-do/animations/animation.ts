import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const FALL = trigger('fall', [
  state(
    'start',
    style({
      flex: '0 1 0',
    }),
  ),
  state(
    'end',
    style({
      flex: '1 1 0',
    }),
  ),
  transition('start => end', [animate('1s ease-in-out')]),
]);

export const SHRINK = trigger('shrink', [
  state(
    'start',
    style({
      width: '200px',
    }),
  ),
  state(
    'end',
    style({
      width: '100px',
    }),
  ),
  transition('start => end', [animate('2s ease-in-out')]),
]);

export const SPACING = trigger('spacing', [
  state(
    'start',
    style({
      marginRight: '3vw',
      marginLeft: '3vw',
    }),
  ),
  state(
    'end',
    style({
      marginRight: '2vw',
      marginLeft: '2vw',
    }),
  ),
  transition('start => end', [animate('2s ease-in-out')]),
]);

export const FADING_IN = trigger('fadingIn', [
  state(
    'start',
    style({
      width: 0,
      height: 0,
      opacity: 0,
    }),
  ),
  state(
    'end',
    style({
      width: '300px',
      height: '300px',
      opacity: 1,
    }),
  ),
  transition('start => end', [
    animate(
      '10ms ease-in-out',
      style({
        width: '300px',
        height: '300px',
      }),
    ),
    animate('2s ease-in-out', style({ opacity: 1 })),
  ]),
]);

export const SELECTED = trigger('selected', [
  state(
    'selected',
    style({
      width: 0,
      height: 0,
      opacity: 0,
    }),
  ),
  state(
    'end',
    style({
      width: '300px',
      height: '300px',
      opacity: 1,
    }),
  ),
  transition('* => selected', [
    animate(
      '10ms ease-in-out',
      style({
        width: '300px',
        height: '300px',
      }),
    ),
    animate('2s ease-in-out', style({ opacity: 1 })),
  ]),
]);
