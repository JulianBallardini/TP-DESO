package com.capitalhumano.dao;

import java.util.ArrayList;
import java.util.UUID;

import com.capitalhumano.modelo.Competencia;

public interface ICompetenciaDao {

    public ArrayList<Competencia> buscar(String nombre);

    public Competencia findById(UUID id);

    public void guardar(Competencia competencia);

    public void actualizar(Competencia competencia);

    public void eliminarLogico(UUID id);

    public boolean validarEnUso(UUID id);

}
