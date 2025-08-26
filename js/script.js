document.getElementById('agendamentoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Consulta agendada com sucesso!');
    this.reset();
});
