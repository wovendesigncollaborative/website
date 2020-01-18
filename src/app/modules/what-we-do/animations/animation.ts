import { animate, state, style, transition, trigger } from '@angular/animations';

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
      width: '100%',
    }),
  ),
  state(
    'end',
    style({
      width: '50%',
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
