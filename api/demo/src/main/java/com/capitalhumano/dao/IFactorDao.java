package com.capitalhumano.dao;

import java.util.ArrayList;
import java.util.UUID;

import com.capitalhumano.modelo.Factor;

public interface IFactorDao {

    public ArrayList<Factor> buscar(String comp, String nombre);

    public Factor findById(UUID id);

    public void guardar(Factor factor);

    public void actualizar(Factor factor);

    public void eliminarLogico(UUID id);
    
}
