package com.capitalhumano.dao;

import java.util.Optional;

import com.capitalhumano.modelo.Pregunta;

public interface IPreguntaDao {

    public Optional<Pregunta[]> buscarPreguntas(String comp, String factor, String nombre);

    public Optional<Pregunta> findById(Long id);

    public void guardar(Pregunta pregunta);

    public void actualizar(Pregunta pregunta);

    public void eliminarLogico(Long id);

    public Optional<Pregunta[]> eliminarPorFactor(String codigoFactor);

}
