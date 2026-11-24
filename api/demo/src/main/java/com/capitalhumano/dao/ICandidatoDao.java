package com.capitalhumano.dao;

import java.util.Optional;

import com.capitalhumano.modelo.Candidato;
import com.capitalhumano.modelo.Candidato.TipoDocumento;

public interface ICandidatoDao {

    public Optional<Candidato[]> buscar(String apellido, String nombre, Long nro);

    public Optional<Candidato> buscarPorCandidato(TipoDocumento tipo, String nro);

    public Optional<Candidato> findById(Long id);

    public void guardar(Candidato candidato);

    public void actualizar(Candidato candidato);

    public void eliminarLogico(Long id);
}
