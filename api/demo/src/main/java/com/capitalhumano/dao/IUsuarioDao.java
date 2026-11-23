package com.capitalhumano.dao;

import com.capitalhumano.modelo.Usuario;

public interface IUsuarioDao {

    public Usuario buscarPorUser(String user);

    public Usuario findById(int id);

}
