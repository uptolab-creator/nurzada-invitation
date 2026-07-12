export type Language = 'ru' | 'ky' | 'en';

export interface RSVP {
  id: string;
  name: string;
  willAttend: boolean;
  plusOne: boolean;
  companionName?: string;
  timestamp: string;
}

export interface Translation {
  title: string;
  subtitle: string;
  hostsInvitation: string;
  saveTheDateTitle: string;
  saveTheDateDesc: string;
  calendarMonth: string;
  calendarDays: {
    mon: string;
    tue: string;
    wed: string;
    thu: string;
    fri: string;
    sat: string;
    sun: string;
  };
  countdownTitle: string;
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  countdownCompleted: string;
  locationTitle: string;
  locationVenue: string;
  locationAddress: string;
  openMapButton: string;
  gatheringLabel: string;
  gatheringTime: string;
  officialStartLabel: string;
  officialStartTime: string;
  eveningEndLabel: string;
  eveningEndTime: string;
  programTitle: string;
  programItems: {
    time: string;
    title: string;
  }[];
  dressCodeTitle: string;
  dressCodeDesc: string;
  dressCodePalette: string;
  colors: {
    burgundy: string;
    beige: string;
    milky: string;
    creamy: string;
    lightBrown: string;
    olive: string;
    sage: string;
    darkGreen: string;
  };
  rsvpTitle: string;
  rsvpSubtitle: string;
  rsvpDeadline: string;
  rsvpNameLabel: string;
  rsvpNamePlaceholder: string;
  rsvpWillAttendLabel: string;
  rsvpYes: string;
  rsvpNo: string;
  rsvpPlusOneLabel: string;
  rsvpPlusOnePlaceholder: string;
  rsvpSubmitButton: string;
  rsvpSuccessTitle: string;
  rsvpSuccessDesc: string;
  rsvpSubmitAnother: string;
  finalMessage: string;
  loveLabel: string;
  hostsNames: string;
}
