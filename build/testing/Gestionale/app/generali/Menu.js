class Menu {
	constructor() {
		this._menu = [
			{
				ordine: 1,
				titolo: 'Anagrafica',
				subMenu: [
					['Registrazione', 'Gestionale.view.anagrafica.Main'],
					['Cerca iscritto', 'Gestionale.view.anagrafica.List'],
				]
			},
			{
				ordine: 2,
				titolo: 'Gestione corsi',
				subMenu: [
					['Bacheca corsi', 'Gestionale.view.corso.ListaCorsi'],
					['Nuovo corso di gruppo', 'Gestionale.view.corso.Inserimento'],
					['Corso individuale', 'Gestionale.view.iscritti.List', {tipologiaCorso: 1}],
					['Corso riservato', 'Gestionale.view.iscritti.List', {tipologiaCorso: 5}],
				]
			},
			{
				ordine: 3,
				visibleAdmin: true,
				titolo: 'Personale',
				subMenu: [
					['Visualizza', 'Gestionale.view.istruttori.List']
				]
			},
			{
				ordine: 4,
				visibleAdmin: true,
				titolo: 'Impostazioni',
				subMenu: [
					['Operatori', 'Gestionale.view.operatori.List']
				]
			}
		];
		
	};
	getMenu() {
		return this._menu;
	}
	
}