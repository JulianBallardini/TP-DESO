package com.capitalhumano.dao;

import java.util.ArrayList;
import java.util.UUID;

import com.capitalhumano.modelo.Pregunta;

public interface IPreguntaDao {

    public ArrayList<Pregunta> buscarPreguntas(String comp, String factor, String nombre);

    public Pregunta findById(UUID id);

    public void guardar(Pregunta pregunta);

    public  void actualizar(Pregunta pregunta);

    public void eliminarLogico(UUID id);

    public ArrayList<Pregunta> eliminarPorFactor(UUID idFactor);

}
