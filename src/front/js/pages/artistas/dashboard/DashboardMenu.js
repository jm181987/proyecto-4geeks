export const DashboardMenu = [
	{
		id: 1,
		title: 'Mis Eventos',
		link: '/myevents',
		icon: 'book'
	},
	{
		id: 2,
		title: 'Ordenes',
		link: '/orders',
		icon: 'shopping-bag'
	}
];

export const AccountSettingsMenu = [
	{
		id: 1,
		title: 'Editar Perfil',
		link: '/editprofile',
		icon: 'settings'
	},
	{
		id: 2,
		title: 'Redes Sociales',
		link: '/socialprofiles',
		icon: 'refresh-cw'
	}
];

export const ArtistDashboardMenu = [DashboardMenu, AccountSettingsMenu];

export default ArtistDashboardMenu;