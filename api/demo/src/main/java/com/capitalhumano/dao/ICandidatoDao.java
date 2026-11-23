package com.capitalhumano.dao;

import java.util.ArrayList;
import java.util.UUID;

import com.capitalhumano.modelo.Candidato;
import com.capitalhumano.modelo.Candidato.TipoDocumento;

public interface ICandidatoDao {

    public ArrayList<Candidato> buscar(String apellido, String nombre, int nro);

    public Candidato buscarPorCandidato(TipoDocumento tipo, String nro);

    public Candidato findById(int id);

    public void guardar(Candidato candidato);

    public void actualizar(Candidato candidato);

    public void eliminarLogico(UUID id);
}
