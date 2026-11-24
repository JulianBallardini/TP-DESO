package com.capitalhumano.dao;

import java.util.Optional;

import com.capitalhumano.modelo.PreguntaCuestionario;

public interface IPreguntaCuestionarioDao {

    public void guardar(PreguntaCuestionario preguntaCuestionario);

    public void actualizar(PreguntaCuestionario preguntaCuestionario);

    public Optional<PreguntaCuestionario[]> recuperarPorBloque(Long idBloque);
}
