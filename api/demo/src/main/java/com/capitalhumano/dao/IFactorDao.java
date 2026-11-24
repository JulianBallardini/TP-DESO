package com.capitalhumano.dao;

import java.util.Optional;

import com.capitalhumano.modelo.Factor;

public interface IFactorDao {

    public Optional<Factor[]> buscar(String comp, String nombre);

    public Optional<Factor> findById(String codigo);

    public void guardar(Factor factor);

    public void actualizar(Factor factor);

    public void eliminarLogico(String codigo);
    
}
