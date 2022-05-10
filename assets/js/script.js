document.write('<h1>Estadísticas Centro Médico Ñuñoa</h1>');
document.write('<h1>--------------------------------------------</h1>');

var radiologia = [
    {Hora:'11:00',Especialista:'IGNACIO SCHULZ',Paciente:'FRANCISCA ROJAS',Rut:'9878782-1',Previsión: 'FONASA' },
    {Hora:'11:30',Especialista:'FEDERICO SUBERCASEAUX',Paciente:'PAMELA ESTRADA',Rut:'15345241-3',Previsión:'ISAPRE'},
    {Hora:'15:00',Especialista:'FERNANDO WURTHZ',Paciente:'ARMANDO LUNA',Rut:'16445345-9',Previsión:'ISAPRE'},
    {Hora:'15:30',Especialista:'ANA MARIA GODOY',Paciente:'MANUEL GODOY',Rut:'17666419-0',Previsión:'FONASA'},
    {Hora:'16:00',Especialista:'PATRICIA SUAZO',Paciente:'RAMON ULLOA',Rut:'14989389-K',Previsión:'FONASA'},
];

var traumatologia = [
    {Hora:'8:00',Especialista:'MARIA PAZ ALTUZARRA',Paciente:'PAULA SANCHEZ',Rut:'15554774-5',Previsión:'FONASA'},
    {Hora:'10:00',Especialista:'RAUL ARAYA',Paciente:'ANGÉLICA NAVAS',Rut:'15444147-9',Previsión:'ISAPRE'},
    {Hora:'10:30',Especialista:'MARIA ARRIAGADA',Paciente:'ANA KLAPP',Rut:'17879423-9',Previsión:'ISAPRE'},
    {Hora:'11:00',Especialista:'ALEJANDRO BADILLA',Paciente:'FELIPE MARDONES',Rut:'1547423-6',Previsión:'ISAPRE'},
    {Hora:'11:30',Especialista:'CECILIA BUDNIK',Paciente:'DIEGO MARRE',Rut:'16554741-K',Previsión:'FONASA'},
    {Hora:'12:00',Especialista:'ARTURO CAVAGNARO',Paciente:'CECILIA MENDEZ',Rut:'9747535-8',Previsión:'ISAPRE'},
    {Hora:'12:30',Especialista:'ANDRES KANACRI',Paciente:'MARCIAL SUAZO',Rut:'11254785-5',Previsión:'ISAPRE'},
];

var dental = [
    {Hora:'8:30',Especialista:'ANDREA ZUÑIGA',Paciente:'MARCELA RETAMAL',Rut:'11123425-6',Previsión:'ISAPRE'},
    {Hora:'11:00',Especialista:'MARIA PIA ZAÑARTU',Paciente:'ANGEL MUÑOZ',Rut:'9878789-2',Previsión:'ISAPRE'},
    {Hora:'11:30',Especialista:'SCARLETT WITTING',Paciente:'MARIO KAST',Rut:'7998789-5',Previsión:'FONASA'},
    {Hora:'13:00',Especialista:'FRANCISCO VON TEUBER',Paciente:'KARIN FERNANDEZ',Rut:'18887662-K',Previsión:'FONASA'},
    {Hora:'13:30',Especialista:'EDUARDO VIÑUELA',Paciente:'HUGO SANCHEZ',Rut:'17665461-4',Previsión:'FONASA'},
    {Hora:'14:00',Especialista:'RAQUEL VILLASECA',Paciente:'ANA SEPULVEDA',Rut:'14441281-0',Previsión:'ISAPRE'},
];


// CANTIDAD DE ATENCIONES

document.write(`<h2>Cantidad de Atenciones Radiología: ${radiologia.length}</h2>`);
document.write(`<h2>Cantidad de Atenciones Traumatología: ${traumatologia.length}</h2>`);
document.write(`<h2>Cantidad de Atenciones Dentales: ${dental.length}</h2>`);

// PRIMERA Y ÚLTIMA ATENCIÓN PACIENTES



