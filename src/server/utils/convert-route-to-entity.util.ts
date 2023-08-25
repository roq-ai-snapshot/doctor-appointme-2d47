const mapping: Record<string, string> = {
  appointments: 'appointment',
  'it-supports': 'it_support',
  'medical-staffs': 'medical_staff',
  'office-managers': 'office_manager',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
