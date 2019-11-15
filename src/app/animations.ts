import {
  animation, trigger, animateChild, group,
  transition, animate, style, query
} from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('Login <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%'}))
      ], { optional: true }),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('* <=> Login', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          animate('200ms ease-out', style({ left: '100%'}))
      ], { optional: true }),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
  ]),
  transition('AddCard <=> *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ]),
    query(':enter', [
      style({ left: '-100%'})
    ]),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [
        animate('300ms ease-out', style({ left: '100%'}))
    ], { optional: true }),
      query(':enter', [
        animate('300ms ease-out', style({ left: '0%'}))
      ])
    ]),
    query(':enter', animateChild()),
  ]),
  transition('* <=> AddCard', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ]),
    query(':enter', [
      style({ left: '-100%'})
    ]),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [
        animate('200ms ease-out', style({ left: '100%'}))
    ], { optional: true }),
      query(':enter', [
        animate('300ms ease-out', style({ left: '0%'}))
      ])
    ]),
    query(':enter', animateChild()),
]),
transition('NotFound <=> *', [
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%'
    })
  ]),
  query(':enter', [
    style({ left: '-100%'})
  ]),
  query(':leave', animateChild(), { optional: true }),
  group([
    query(':leave', [
      animate('300ms ease-out', style({ left: '100%'}))
  ], { optional: true }),
    query(':enter', [
      animate('300ms ease-out', style({ left: '0%'}))
    ])
  ]),
  query(':enter', animateChild()),
]),
transition('Card <=> *', [
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%'
    })
  ]),
  query(':enter', [
    style({ left: '-100%'})
  ]),
  query(':leave', animateChild(), { optional: true }),
  group([
    query(':leave', [
      animate('300ms ease-out', style({ left: '100%'}))
  ], { optional: true }),
    query(':enter', [
      animate('300ms ease-out', style({ left: '0%'}))
    ])
  ]),
  query(':enter', animateChild()),
]),
transition('* <=> Card', [
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%'
    })
  ]),
  query(':enter', [
    style({ left: '-100%'})
  ]),
  query(':leave', animateChild(), { optional: true }),
  group([
    query(':leave', [
      animate('200ms ease-out', style({ left: '100%'}))
  ], { optional: true }),
    query(':enter', [
      animate('300ms ease-out', style({ left: '0%'}))
    ])
  ]),
  query(':enter', animateChild()),
]),
transition('WebCam <=> *', [
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%'
    })
  ]),
  query(':enter', [
    style({ left: '-100%'})
  ]),
  query(':leave', animateChild(), { optional: true }),
  group([
    query(':leave', [
      animate('300ms ease-out', style({ left: '100%'}))
  ], { optional: true }),
    query(':enter', [
      animate('300ms ease-out', style({ left: '0%'}))
    ])
  ]),
  query(':enter', animateChild()),
]),
transition('* <=> WebCam', [
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%'
    })
  ]),
  query(':enter', [
    style({ left: '-100%'})
  ]),
  query(':leave', animateChild(), { optional: true }),
  group([
    query(':leave', [
      animate('200ms ease-out', style({ left: '100%'}))
  ], { optional: true }),
    query(':enter', [
      animate('300ms ease-out', style({ left: '0%'}))
    ])
  ]),
  query(':enter', animateChild()),
]),
transition('Search <=> *', [
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%'
    })
  ]),
  query(':enter', [
    style({ left: '-100%'})
  ]),
  query(':leave', animateChild(), { optional: true }),
  group([
    query(':leave', [
      animate('300ms ease-out', style({ left: '100%'}))
  ], { optional: true }),
    query(':enter', [
      animate('300ms ease-out', style({ left: '0%'}))
    ])
  ]),
  query(':enter', animateChild()),
]),
transition('* <=> Search', [
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%'
    })
  ]),
  query(':enter', [
    style({ left: '-100%'})
  ]),
  query(':leave', animateChild(), { optional: true }),
  group([
    query(':leave', [
      animate('200ms ease-out', style({ left: '100%'}))
  ], { optional: true }),
    query(':enter', [
      animate('300ms ease-out', style({ left: '0%'}))
    ])
  ]),
  query(':enter', animateChild()),
])
  ]);
