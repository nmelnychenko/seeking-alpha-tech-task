import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Tabs from "./index";

const tabsMockedContent = {
  controls: ["default tab", "second tab"],
  panels: [<h2>Panel 1</h2>, "Panel 2"]
}

describe("Tabs", () => {
  const { controls, panels } = tabsMockedContent;

  test("renders Tabs component with default Tab", () => {
    render(<Tabs items={controls} panels={panels} />);

    expect(screen.getByText("default tab")).toBeInTheDocument();
    expect(screen.getByText("Panel 1")).toBeInTheDocument();
  });

  test("only defaultTab rendered", () => {
    render(<Tabs items={controls} panels={panels} />);

    expect(screen.queryByText("Panel 2")).not.toBeInTheDocument();
  })

  test("click to second tab control", () => {
    render(<Tabs items={controls} panels={panels} />);

    fireEvent.click(screen.getByText("second tab"));
    expect(screen.getByText("Panel 2")).toBeInTheDocument();
    expect(screen.queryByText("Panel 1")).not.toBeInTheDocument();
  })

  test("click to first tab control", () => {
    render(<Tabs items={controls} panels={panels} />);

    fireEvent.click(screen.getByText("default tab"));
    expect(screen.getByText("Panel 1")).toBeInTheDocument();
    expect(screen.queryByText("Panel 2")).not.toBeInTheDocument();
  })
});