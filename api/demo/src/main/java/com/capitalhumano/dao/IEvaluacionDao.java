package com.capitalhumano.dao;

import java.util.ArrayList;
import java.util.UUID;

import com.capitalhumano.modelo.Evaluacion;

public interface IEvaluacionDao {

    public void guardar(Evaluacion evaluacion);

    public Evaluacion findById(UUID id);

    public ArrayList<Evaluacion> listarPorPuesto(UUID idPuesto);
}
