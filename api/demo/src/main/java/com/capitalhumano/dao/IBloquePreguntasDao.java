package com.capitalhumano.dao;

import java.util.ArrayList;
import java.util.UUID;

import com.capitalhumano.modelo.BloquePreguntas;

public interface IBloquePreguntasDao {
    public void guardar(BloquePreguntas bloquePreguntas);

    public BloquePreguntas findById(UUID id);

    public ArrayList<BloquePreguntas> recuperarBloquesPorCuestionario(UUID idCuestionario);
}
