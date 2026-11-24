package com.capitalhumano.dao;

import java.util.Optional;

import com.capitalhumano.modelo.Evaluacion;

public interface IEvaluacionDao {

    public void guardar(Evaluacion evaluacion);

    public Optional<Evaluacion> findById(Long id);

    public Optional<Evaluacion[]> listarPorPuesto(String codigoPuesto);
}
