package com.capitalhumano.dao;

import java.util.Optional;

import com.capitalhumano.modelo.Competencia;

public interface ICompetenciaDao {

    public Optional<Competencia[]> buscar(String nombre);

    public Optional<Competencia> findById(String codigo);

    public void guardar(Competencia competencia);

    public void actualizar(Competencia competencia);

    public void eliminarLogico(String codigo);

    public boolean validarEnUso(String codigo);

}
